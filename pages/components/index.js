
import ComponentListing from '../../components/other/ComponentListing';
import PageHeading from '../../components/other/PageHeadings';
const ComponentList = () => {

    
    return ( 
        <div>
            <PageHeading 
                title={'Components'} 
                isComponent={false} 
                description={'Get started on your web projects with DripUI Tailwind CSS components'} 
            />
 
            <ComponentListing />

        </div>
     );
}
 
export default ComponentList;