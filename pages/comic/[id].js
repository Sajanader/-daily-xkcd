export default function comicDetails(props){
    return(
        <>
           <h2>{props.Comic.title}</h2>
            <img src={props.Comic.img} />
        </>
    )
}


export async function getServerSideProps(){
    const id = context.query.id
    const response = await fetch(`https://xkcd.com/${id}/info.0.json`)
    const apiData = await response.json()
    return { props: { Comic: dataObj } };

  }
