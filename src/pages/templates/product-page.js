import React from "react"
import { graphql, Link } from "gatsby"
import {Image} from "cloudinary-react"


export default function ProductsPage ({data}){
return(
    <>   <div className="flex flex-col md:flex-row content-center m-auto w-2/3" >
<Image
              cloudName="anthow"
              publicId={data.markdownRemark.frontmatter.image}
              width="300"
              height="300"
              crop="fill"
              gravity="auto"
              fetchFormat="auto"
              quality="auto"
              secure="true"
              className=" md:mdx-8 rounded-lg"
              ></Image>
<div className="mt-4 md:mt-0 md:w-2/3 md:mx-8"> 

<Link className="font-bold text-grey-600 "  to="/products">
        ← retour sur les produits
      </Link>
      
      <h1 className="font-bold text-3xl text-black-800 mt-8 mb-2">
        {data.markdownRemark.frontmatter.name}
      </h1>
     
      <span className="block font-semibold text-lg text-red-600">
        {data.markdownRemark.frontmatter.price} €
      </span>
      <button className="btn btn-green mt-4">
          ajouter au panier
      </button>
  
     
    
      </div>
      
      
    
      </div>
      <div className=" markdown mt-4 w-2/3  m-auto border-2t p-8"
      dangerouslySetInnerHTML={{__html:data.markdownRemark.html}}>
         </div>
   </>
   
)
}

export const pageQuery =graphql `
query($id: String!) {
  markdownRemark(id: { eq: $id }) {
    html
    frontmatter {
      id
      name
      price
      image
    }
    fields {
      slug
    }
  }
}`