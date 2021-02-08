import React from "react"
import Seo from '../components/seo'
import { graphql, Link } from "gatsby"

const IndexPage = (data) => {
  
  return (
    <>
      <Seo title='accueil' />
    <main className="lg">
      <div className="head">
      <h1 className="font-bold text-2xl text-center">
        Coccinelles et compagnies : Espace de création et de savoir faire
      </h1>
      <h2 className="font-bold text-xl text-center">
        Notre concept
        </h2>
      <p className="p-5 text-center">
        Aenean maximus lorem vitae auctor ullamcorper. Aliquam cursus fermentum
        rhoncus. Aenean interdum n risus a iaculis. In placerat dolor purus, nec
        suscipit est iaculis at. Pellentesque nec nisl risus. Nullam quis felis
        vel urna viverra mollis ac nec felis. In scelerisque ante non vehicula
        auctor.
      </p>
      <p className="p-5 text-center mb-5">
        Aenean maximus lorem vitae auctor ullamcorper. Aliquam cursus fermentum
        rhoncus. Aenean interdum n risus a iaculis. In placerat dolor purus, nec
        suscipit est iaculis at. Pellentesque nec nisl risus. Nullam quis felis
        vel urna viverra mollis ac nec felis. In scelerisque ante non vehicula
        auctor.
      </p>
      </div>
      <div className='content'>
<section className="flex justify-center mb-10  flex-wrap">
<article className=" md:w-1/3 md: mb-0 m-auto w-10/12 mb-3">
  <img className=" mb-3 block m-auto" src="https://fakeimg.pl/200/"  />
<h3 className="font-bold text-1xl text-center"> boutique</h3>
<p className="p-2 text-center mb-3">Aenean maximus lorem vitae auctor ullamcorper. 
Aliquam cursus fermentum rhoncus. Aenean interdum 
in risus a iaculis. In placerat dolor purus, nec suscipit 
est iaculis at. Pellentesque nec nisl risus. Nullam quis 
felis vel urna viverra mollis ac nec felis. In scelerisque 
ante non vehicula auctor. </p>
<button className="  block m-auto p-2  w-auto bg-yellow-300 text-center" name="button" type="button">Click Here</button>  
  </article> 
  <article className=" md:w-1/3 m-auto w-10/12">
  <img className="  mb-3 block m-auto" src="https://fakeimg.pl/200/"  />
    <h3  className="font-bold text-1xl text-center"> Ateliers/formations  </h3>
<p className="p-2 text-center mb-3">Aenean maximus lorem vitae auctor ullamcorper. 
Aliquam cursus fermentum rhoncus. Aenean interdum 
in risus a iaculis. In placerat dolor purus, nec suscipit 
est iaculis at. Pellentesque nec nisl risus. Nullam quis 
felis vel urna viverra mollis ac nec felis. In scelerisque 
ante non vehicula auctor. </p>
<button className="  block m-auto p-2 w-auto bg-yellow-300 text-center" name="button" type="button">Click Here</button>  
  </article>
</section>

<h2 className="font-bold mb-5 text-xl text-center">
    nos valeurs
  </h2>
  <section className="flex justify-center flex-wrap">
  <article className="md:w-1/4 md: mb-0 m-auto w-10/12 mb-3">
  <img  className="mb-3 block m-auto" src="https://fakeimg.pl/150/"/>
  <h3 className="font-bold text-1xl text-center"> lorem ipsum  </h3>
  <p className="p-2 text-center mb-3">Aenean maximus lorem vitae auctor ullamcorper. 
Aliquam cursus fermentum rhoncus. Aenean interdum 
in risus a iaculis. In placerat dolor purus, nec suscipit 
est iaculis at. Pellentesque nec nisl risus. Nullam quis 
felis vel urna viverra mollis ac nec felis. In scelerisque 
ante non vehicula auctor. </p>
  </article>
  <article className="md:w-1/4 md: mb-0 m-auto w-10/12 mb-3">
  <img  className="mb-3 block m-auto" src="https://fakeimg.pl/150/"/>
  <h3 className="font-bold text-1xl text-center"> lorem ipsum  </h3>
  <p className="p-2 text-center mb-3">Aenean maximus lorem vitae auctor ullamcorper. 
Aliquam cursus fermentum rhoncus. Aenean interdum 
in risus a iaculis. In placerat dolor purus, nec suscipit 
est iaculis at. Pellentesque nec nisl risus. Nullam quis 
felis vel urna viverra mollis ac nec felis. In scelerisque 
ante non vehicula auctor. </p>
  </article>
  <article className="md:w-1/4 md: mb-0 m-auto w-10/12 mb-3">
  <img  className="mb-3 block m-auto" src="https://fakeimg.pl/150/"/>
  <h3 className="font-bold text-1xl text-center"> lorem ipsum  </h3>
  <p className="p-2 text-center mb-3">Aenean maximus lorem vitae auctor ullamcorper. 
Aliquam cursus fermentum rhoncus. Aenean interdum 
in risus a iaculis. In placerat dolor purus, nec suscipit 
est iaculis at. Pellentesque nec nisl risus. Nullam quis 
felis vel urna viverra mollis ac nec felis. In scelerisque 
ante non vehicula auctor. </p>
  </article>
</section>
      </div>
      </main>
    </>
  )
}
export default IndexPage

