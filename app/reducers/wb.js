var init = {
    title : '',
    articles: []
}

export default function wb(state = init, action) {

    switch (action.type) {

        case 'ARTICLES_LOAD_FULFILLED':
            return { ...state, 'title': action.text, 'articles': action.articles }
            
        default:
            return state
    }
}