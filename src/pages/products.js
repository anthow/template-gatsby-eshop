import React from "react"
import { graphql, Link } from "gatsby"
import {Image} from "cloudinary-react"
import Content from '../components/content'
import Seo from '../components/seo'


const ProductsPage = ({ data }) => {
  const products = data.allMarkdownRemark.edges
return(
  <Content>
  <Seo title='boutique' />
  <section className='list-product flex flex-col md:flex-row content-center space-x-4 w-11/12'>
  <aside className='list-product flex p-2 text-center align-middle md:flex-col content-center space-x-4 px-8  border-r-0 md:border-r-2 '>
    <h3 className="text-center mb-2 font-semibold">catégorie</h3>
    <p className="text-left">blabla</p>
    <p className="text-left">blabla</p>
    <p className="text-left">blabla</p>
    <p className="text-left">blabla</p>
  </aside>
  <div className="product-list flex-grow">
      {products.map(({ node }) => {
        return (
            <Link
            key={node.fields.slug}
            to={node.fields.slug}
            className="block rounded-lg shadow hover:shadow-2xl"
          >
            <div className="relative pb-full">
              <Image
              cloudName="anthow"
              publicId={node.frontmatter.image}
              width="400"
              height="310"
              crop="fill"
              gravity="auto"
              fetchFormat="auto"
              quality="auto"
              secure="true"
              className="object-cover"
              ></Image>
          
            </div>
            <div className="bg-white p-4">
            
              <div className="font-bold text-2xl">
                {node.frontmatter.name}
              </div>
              <div className="font-semibold text-l">
                {node.frontmatter.price} €
              </div>
              <div className="font-semibold text-l">
                {node.frontmatter.categorie} 
              </div>
            </div>
    </Link>
    )
      }
      )}
    </div>
</section>
 </Content>
)
}
export default ProductsPage

export const pageQuery = graphql`
query MyQuery {
    allMarkdownRemark {
      edges {
        node {
            fields{
                slug
            }
          frontmatter {
            name
            id
            price
            image
            categorie
          }
        }
      }
    }
  }
  
`

