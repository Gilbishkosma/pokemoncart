import React from 'react'

function Tags(props) {
    const { tag, searchmethod, tags, selected_tag } = props
    const selectedTag = selected_tag.tag === tag
    // const tagActivated  = tags.filter(item => item.tag === tag)
    return (
        <div className="column">
            <button className={`${selectedTag ? 'button is-rounded is-primary' : 'button is-rounded'}`} style={{ marginRight: '20px' }} onClick={() => searchmethod(tag)}>{tag}</button>
        </div>
    )
}

export default Tags
