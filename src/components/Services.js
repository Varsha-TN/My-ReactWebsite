import Card from './Card';
import Sdata from './Sdata';
import '../App.css';

function Services() {
    return (
        <>
            <div className="my-5">
            <h1 className="text-center"> Our Services</h1>
            </div>
            <div className="container-fluid mb-5">
                <div className="row">
                    <div className="col-10 mx-auto">
                        <div className="row gy-4">
                            {
                                Sdata.map((val, i) => {
                                    return <Card key={i} img={val.imgsrc} title={val.title} />
                                })
                            }
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Services;