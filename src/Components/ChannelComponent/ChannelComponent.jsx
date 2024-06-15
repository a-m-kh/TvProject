import ChannelBoxComponent from "./ChannelBoxComponent.jsx"

const ChannelComponent = () => {

    const Channels = [
        {
            Title: "Channel",
            Number: "1",
            Color: "blue",
            isBorder: true
        },
        {
            Title: "Channel",
            Number: "2",
            Color: "green",
            isBorder: false
        },
        {
            Title: "Channel",
            Number: "3",
            Color: "Yelow",
            isBorder: false
        },
        {
            Title: "Channel",
            Number: "4",
            Color: "purple",
            isBorder: false
        },
        {
            Title: "Channel",
            Number: "5",
            Color: "red",
            isBorder: false
        },
        {
            Title: "Channel",
            Number: "6",
            Color: "blue",
            isBorder: false
        },
        {
            Title: "Channel",
            Number: "7",
            Color: "red",
            isBorder: false
        },
        {
            Title: "Channel",
            Number: "8",
            Color: "blue",
            isBorder: false
        }
    ]


    return (
        <div style={{
            display: "flex",
            width: "1100px",
            flexWrap: "wrap"
        }}>
            {Channels.map((item, index) => {
                return (
                    <ChannelBoxComponent
                        Key={index}
                        Number={item.Number}
                        Title={item.Title}
                        lineColor={item.Color}
                        isBorder={item.isBorder} />
                )
            }
            )}
        </div>
    )


}
export default ChannelComponent;