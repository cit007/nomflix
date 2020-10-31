import React from "react.js"
import TVPresenter from "./TVPresenter";

class TVContainer extends React.component {
    state = {
        topRated: null,
        popular: null,
        airingToday: null,
        error: null,
        loading: true
    }

    render() {
        const { topRated, popular, airingToday, loading, error } = this.state;
        return (
            <TVPresenter
                topRated={topRated}
                popular={popular}
                airingToday={airingToday}
                error={error}
                loading={loading}
            />
        );
    }
}

export default TVContainer;