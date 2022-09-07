
import Meta from '../../components/layout/meta';
import ComponentListing from '../../components/other/ComponentListing';
import PageHeading from '../../components/other/PageHeadings';

const ComponentList = () => {
    return ( 
        <>
        <Meta 
            title={'DripUI - Tailwind Components List'} 
            description={'Get started on your web projects with DripUI Tailwind CSS components'} 
            url={'/components'}
        />
            <PageHeading 
                title={'Components'} 
                isComponent={false} 
                description={'Get started on your web projects with DripUI Tailwind CSS components'} 
            />

            <ComponentListing />

        </>
     );
}
 
export default ComponentList;