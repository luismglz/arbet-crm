import React from "react";
import { Outlet, Link } from "react-router-dom";

const Layout = () => {
  return(
    <div className="md:flex md:min-h-screen">
      <aside className="md:w-1/4 bg-blue-800 px-5 py-10">
        <h2 className="text-4xl font-black text-center text-white">Arbet</h2>
        <nav className="mt-10">
          <Link className="text-2xl block mt-2 hover:text-blue-300 text-white" to="/">Customers</Link>
          <Link className="text-2xl block mt-2 hover:text-blue-300 text-white" to="/customers/new">New customer</Link>
        </nav>
      </aside>
      <main className="md:w-3/4 p-10 md:h-screen overflow-scroll">
        <Outlet/>
      </main>
      {/* <Outlet/> */}
    </div>
  )
}

export default Layout;