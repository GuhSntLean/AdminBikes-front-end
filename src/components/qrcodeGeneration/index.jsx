import { QRCodeSVG } from "qrcode.react";

const QrCodeGeneration = (props) => {
  return (
    <>
      <QRCodeSVG
        value={props.codeBike}
        size={200}
        bgColor={"#6C757D"}
        fgColor={"#0F9FE2"}
        level={props.level}
        includeMargin={true}
        imageSettings={{
          src: "./image/simbol.png",
          x: null,
          y: null,
          height: 40,
          width: 40,
          excavate: true,
        }}
      />
    </>
  );
};

export default QrCodeGeneration;
