import { Button } from "@material-ui/core";
import Navbar from '../components/Navbar';
import MainLayout from "@/layouts/MainLayout";


const Index = () => {
    return (
        <>  
            <MainLayout> 
                <div className="center">
                    <h1>HELLO</h1>
                    <h3>The best songs are here!</h3>
                </div>
            </MainLayout>
            

            <style jsx>
                {`
                    .center {
                        display: flex;
                        margin-top: 150px;
                        flex-direction: column;
                        align-items: center;
                        justify-content: center;
                    }
                `}
            </style>
        </>
    )
}

export default Index;
