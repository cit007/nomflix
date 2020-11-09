import React from "react";
import SearchPresenter from "./SearchPresenter";
import { moviesApi, tvApi } from "../../API/api";

class SearchContainer extends React.Component {
    state = {
        movieResults: null,
        tvResults: null,
        searchTerm: "",
        loading: false,
        error: null
    }

    searchHandle = event => {
        event.preventDefault();
        const {searchTerm} = this.state;
        console.log("search input text is ", searchTerm)
        if (searchTerm !== "")
            this.searchByTerm();
    };

    updateTerm = event => {
        // @TODO display input text from search input 
        const {target:{value}} = event;
        console.log(value);
        this.setState({searchTerm : value});
    };

    searchByTerm = async() => {
        const {searchTerm} = this.state;
        this.setState( {Loading: true});
        try {
            const {data:{results:movieResults}} = await moviesApi.search(searchTerm);
            console.log("search movie :", movieResults);
            const {data:{results:tvResults}} = await tvApi.search(searchTerm);
            console.log("search tv :", tvResults);
            this.setState({movieResults:movieResults, tvResults:tvResults});
        } catch {
            this.setState({
                error: "Can't search movies or tv information."
            });
        } finally {
            this.setState({
                loading: false
            });
        }
    }

    render() {
        const { movieResults, tvResults, searchTerm, loading, error } = this.state;
        return (
            <SearchPresenter
                movieResults={movieResults}
                tvResults={tvResults}
                searchTerm={searchTerm}
                updateTerm={this.updateTerm}
                searchHandle={this.searchHandle}
                loading={loading}
                error={error}
            />
        );
    }
}

export default SearchContainer;