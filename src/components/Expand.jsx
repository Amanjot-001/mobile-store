import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { ExpandWrapper, Content } from "../assets/styles/expand";
import Data from "../utils/db";
import { NavLink, useParams } from "react-router-dom";
import { faXmark } from "@fortawesome/free-solid-svg-icons";

const Expand = () => {
    const { id } = useParams();
    const mobileData = Data.find((entry) => entry.id === Number(id));

    return (
        <ExpandWrapper>
            <div className="image">
                <img src={mobileData.image_url} alt="mobile-img" />
            </div>
            <Content>
                <div className="name">
                    {mobileData.name}
                </div>
                <div className="released">
                    Released on: <span>{mobileData.release_date}</span>
                </div>
                <div className="processor">
                    Processor: <span>{mobileData.processor}</span>
                </div>
                <div className="os">
                    Os: <span>{mobileData.os}</span>
                </div>
                <div className="variants">
                    Variants:
                    {mobileData.storage.map((item, index) => (
                        <span key={index}>{item} / {mobileData.ram[index]}</span>
                    ))}
                </div>
                <div className="price">
                    Prices:
                    {mobileData.price.map((item, index) => (
                        <span key={index}>Rs.{item}</span>
                    ))}
                </div>
            </Content>
            <NavLink className='links' to='/'>
                <div className="close">
                    <FontAwesomeIcon icon={faXmark} />
                </div>
            </NavLink>
        </ExpandWrapper>
    )
}

export default Expand;