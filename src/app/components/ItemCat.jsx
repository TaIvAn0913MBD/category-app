
const List =({info})=>{
    const {title, description, category, thumbnail, id} = info
    return(<div  className="border">
        <div className="title">{title}</div>
        <h3 className="description">{description}</h3>
        <div className="category">{category}</div>
        <div>{id}</div>
        <img className="thumbnail" src={thumbnail} />
    </div>)
}
export default List