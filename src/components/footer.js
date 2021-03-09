import React from "react"
function Footer( {metaData} ) {
  return (
    <footer className="flex p-2 text-white text-sm border-t-2  justify-center">
      {metaData.title}, {new Date().getFullYear()}, créé par {metaData.author}
      {<a href={metaData.companyWebsite} className="link underline">{metaData.company} </a>}
    </footer>
  )
}
export default Footer
