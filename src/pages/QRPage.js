import QRCode from "react-qr-code";
import {useState} from "react";

const QRPage = () => {
    //useState - це спеціальний хук для зберігання інформації
    //Якщо дані змінюються, відбувається render компонента
    //qrCode - це змінна, яка зберігає значення
    //setQrCode - це фукнція, яка онолвяє змінну qrCode і робить render
    const [qrCode, setQrCode] = useState("https://kherson.itstep.org/");

    // console.log("qrCode", qrCode);
    const onChangeInput = (e) => {
        // e - це сам input - у якому відбуваються зміниї
        //Подія яка спрацьовує коли дані у input змінюються
        setQrCode(e.target.value); //Суди передаємо значення, яке є input на даний момент
    }

    return (
        <div className="container">
            <div className={"col-md-8 offset-md-2 mt-2"}>
                <h1 className={"text-center"}>Генерація QR кодів</h1>
                <div className="mb-3">
                    <label htmlFor="myInputQR" className="form-label">Вкажіть посилання на сайт</label>
                    <input type="text"
                           className="form-control"
                           id="myInputQR"
                           value = {qrCode}
                           onChange={onChangeInput}
                    />
                </div>
                <QRCode value={qrCode}/>
            </div>
        </div>
    )
}

export default QRPage;