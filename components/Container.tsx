interface ContainerProps {
    children: React.ReactNode;
}

const Container: React.FC<ContainerProps> = ({ children }) => {
    return ( 
        <div className="max-w-[1920px] w-full mx-auto px-4 md:px-20">
            {children}
        </div>
     );
}
 
export default Container;