import Layout from "../components/layout/layout";
// We would like to see how transfer design into functional code
// We have set up the project in NextJS, using framer-motion for animation and scss modules for styling.
// We have used functional components throughout and implemented TypeScript where applicable. Please continue these patters if you are able.

// We have some tasks for you to accomplish as follows:
// 1) Create the header component and all of the necessary children components
// 2) Create the nav drawer with open and closing animations matching the framer prototype -- https://framer.com/projects/OCD-Components--yydWxRNRkysIxyxn82cx-em1Yq
// 3) Create the Nav links using data from the following API endpoint -- https://api.mocki.io/v1/86d95ec1
// 4) Adapt the nav menu to be responsive, adding a scrim behind the nav that will close the nav on click

// Framer prototype is available at -- https://framer.com/projects/OCD-Components--yydWxRNRkysIxyxn82cx-em1Yq
// All required images are within the /images folder
// Nav links api available at -- https://api.mocki.io/v1/86d95ec1
/* API body schema - [
	{
		label: string, -- Label to show on the menu
		url: string -- url to use as a href
	}
]
*/

const IndexPage = () => {
	return (
		<Layout>
			<div>Hello World.</div>
		</Layout>
	);
};

export default IndexPage;
