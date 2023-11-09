import { BrowserRouter as Browser, Route, Routes } from 'react-router-dom';
import { publicRoutes } from '~/routes';
import { DefaultLayout } from './Components/Layout';
import { Fragment } from 'react';

function App() {
    return (
        <Browser>
            <div className="App">
                <Routes>
                    {publicRoutes.map((route, index) => {
                        let Layout = DefaultLayout;
                         console.log(route.layout)
                        if (route.layout) {
                            Layout = route.layout;
                        } else if(route.layout === null){
                            Layout = Fragment;
                        }

                        const Page = route.component;

                        return (
                            <Route
                                key={index}
                                path={route.path}
                                element={
                                    <Layout>
                                        <Page />
                                    </Layout>
                                }
                            />
                        );
                    })}
                </Routes>
            </div>
        </Browser>
    );
}

export default App;
