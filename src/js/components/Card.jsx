import NottFound from "../../img/notfound.svg";

export const Card = (props) => {
    return (
        <div className="col-lg-3 col-md-6 mb-4">
            <div className="card h-100 shadow-sm">
                <img
                    className="card-img-top"
                    src={props.image}
                    alt={props.title}
                    onError={(e) => {
                        e.target.src = '';
                    }}
                />
                <div className="card-body d-flex flex-column">
                    <h5 className="card-title">{props.title}</h5>
                    <p className="card-text">{props.text}</p>
                </div>
                <div className="card-footer bg-white border-top-0">
                    <a href="#" className="btn btn-primary">
                        {props.buttonText || "Find Out More!"}
                    </a>
                </div>
            </div>
        </div>
    );
};
