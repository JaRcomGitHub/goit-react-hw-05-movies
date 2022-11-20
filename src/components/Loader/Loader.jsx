import { ThreeDots } from  'react-loader-spinner'

export function Loader() {
    return (
        <div className="Loader">
            <ThreeDots 
                height="80" 
                width="80" 
                radius="9"
                color="orangered" 
                ariaLabel="three-dots-loading"
                wrapperStyle={{}}
                wrapperClassName=""
                visible={true}
            />
        </div>
    )
};
