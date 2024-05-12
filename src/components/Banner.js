const header = "Jungle Home";
const description = "Ici achetez toutes les plantes dont vous avez toujours rêvé 🌵🌱🎍"

function Header(){
                    return (
                            <h1>{header.toUpperCase()}</h1>
                           
        );
    }
function Description(){
        return (
                <p>{description}</p>
    );
    }
export default function Banner(){
        return (
                <>
                <Header />
                <Description />
                </>
        )
}