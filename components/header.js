import Link from "next/link"
export default function Header () {
    return (
    <div>
        <nav>
            <div className="wrapper">
            <div className="logo">
                <img src="https://img.freepik.com/free-vector/vector-compact-photo-camera-top-view-isolated-white-background_1284-45522.jpg?t=st=1657240594~exp=1657241194~hmac=f6d01cd85675772e655de07174f7f62e3e4eae58e99bcbca02b6a57e52a30b00&w=740"/>
            </div>
                <div className="logo"><a href=''> TM RENTAL CAMERA</a></div>
                <div className="menu">
                    <ul>
                        <li>
                            <Link  href="http://localhost:3000/">
                            <a>Home</a>
                            </Link>
                        </li>
                        <li>
                            <Link  href="list">
                            <a>List</a>
                            </Link>
                        </li>
                        <li>
                            <Link  href="designer">
                            <a>Combination</a>
                            </Link>
                        </li>
                        <li>
                            <Link  href="product">
                            <a>Product</a>
                            </Link>
                        </li>
                        <li>
                            <Link  href="contac">
                            <a>Contact</a>
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    </div> 
    )
    
}