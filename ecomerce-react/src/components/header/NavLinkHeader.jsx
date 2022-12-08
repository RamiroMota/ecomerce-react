export default ({ text }) => { 
    return (
        <a href="#">
            <span>{text}</span>
            <span className="block w-full h-4 bg-pink-300"></span>
        </a>
    );
};