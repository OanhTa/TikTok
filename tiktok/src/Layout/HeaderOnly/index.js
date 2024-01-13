import Header from "~/Layout/Components/Header/Header";

function HeaderOnly({children}) {
    return (
        <div>
            <Header/>
            <div className="container">
                <div className="content">
                     {children}
                </div>
            </div>
            
        </div>
      );
}

export default HeaderOnly;