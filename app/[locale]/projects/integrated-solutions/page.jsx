import React from 'react';
import Link from 'next/link';
import '@styles/globals.css';

const ProjectPage = () => {
  const projectTitle = "Integrated Solutions for Industrial, Oil & Gas, Mining Equipment"; // Replace with your project title
  const projectDescription = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean sagittis semper tincidunt. Suspendisse eget dui id augue tempus pellentesque quis quis ex. Fusce viverra, odio sed hendrerit vulputate, magna metus malesuada ante, id luctus felis lectus et erat. Nulla ac sapien at massa imperdiet molestie. Maecenas ornare nulla sed arcu egestas, sed eleifend nulla pellentesque. 
  \n\nVestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Nulla imperdiet dolor in odio finibus lacinia. Praesent mollis, magna eget molestie finibus, massa erat tempus mauris, a aliquet eros elit ut ligula. Curabitur in justo orci. Mauris libero turpis, venenatis non vehicula at, convallis non risus. Quisque arcu tortor, congue sit amet nisl vel, accumsan sollicitudin lectus. Ut quis purus ut nunc faucibus luctus.
  \n\nMorbi ullamcorper dictum ornare. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Sed ut congue massa, ut pulvinar enim. In id nisi diam. Curabitur risus felis, vestibulum efficitur ornare id, eleifend eget dolor. Vestibulum tempus, lorem auctor ullamcorper dapibus, turpis ligula commodo magna, in malesuada massa urna et velit. Integer volutpat varius felis vitae iaculis. Interdum et malesuada fames ac ante ipsum primis in faucibus. Donec aliquet sollicitudin neque, id imperdiet sem dictum in. In hac habitasse platea dictumst. Integer nunc odio, luctus quis rutrum ac, vestibulum et dui. Sed neque massa, blandit ac aliquam sit amet, bibendum nec justo. Proin tempus lobortis dapibus. Vestibulum arcu lectus, maximus ut dapibus dictum, posuere ac nibh. Quisque vulputate, lectus id iaculis egestas, risus nulla imperdiet diam, quis malesuada ipsum est sit amet leo.
  \n\nEtiam elementum dictum dolor et semper. Nam a risus sit amet mi mollis porta sit amet nec augue. Etiam id est sagittis, scelerisque sapien sed, pharetra tellus. Proin blandit nisi et arcu viverra mattis. Integer fringilla in est sed lacinia. Maecenas convallis imperdiet nibh, eu volutpat velit pharetra in. Donec at mattis neque. Sed pretium maximus mollis. Vestibulum ornare, lorem quis fringilla tincidunt, leo erat dictum libero, et interdum arcu est sit amet neque.
  \n\nAliquam interdum dictum nulla, a pretium tellus accumsan vel. Ut nec sollicitudin justo. Nunc feugiat lacus eu nulla lobortis pretium. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Aliquam porta ante sem, vel imperdiet justo consequat nec. Quisque et consequat nunc, ut vehicula dolor. Sed sed consectetur nunc, vitae cursus enim. Integer iaculis nisi non lacinia gravida. Mauris porttitor, purus sed auctor sagittis, eros nunc tincidunt erat, eget hendrerit mauris enim ut erat. Phasellus a rhoncus quam, vitae convallis turpis. Suspendisse posuere magna id urna malesuada, sed feugiat odio congue. In laoreet neque nibh, cursus gravida risus gravida vitae. Nam convallis vel turpis laoreet molestie. Suspendisse id ex at mi facilisis maximus. In eget tortor at lacus sodales pellentesque quis ut lacus. Vestibulum ligula metus, bibendum vel est id, laoreet luctus magna.
  \n\nNullam non luctus quam, nec ornare enim. Ut sit amet arcu at urna vulputate feugiat quis id orci. Vivamus a diam fringilla, facilisis urna at, volutpat nulla. Nulla id tincidunt mauris. Curabitur laoreet risus diam, in pharetra purus fermentum ut. Nunc at ante lectus. Nunc malesuada dolor viverra elit mattis scelerisque. In libero libero, tincidunt in nulla sit amet, suscipit consectetur elit. Vivamus sapien libero, scelerisque id urna at, tincidunt efficitur erat. Ut egestas pulvinar convallis. Sed semper, felis eu tincidunt commodo, ipsum ligula vulputate velit, nec suscipit elit elit et nibh. Vestibulum rutrum mi posuere malesuada laoreet. Phasellus ullamcorper nibh vel diam placerat, ut mollis eros tristique.`; //replace with description

  return (
    <div className="min-h-screen bg-gray-100 py-8">
      <div className="container mx-auto">
        <div className="flex flex-col items-center justify-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-4 text-center">{projectTitle}</h1>
          <img
            src="/path/to/your/image-placeholder.jpg" // Replace with your image placeholder
            alt={projectTitle}
            className="w-96 h-72 object-cover rounded-md shadow-md mb-6"
          />
          <p className="text-gray-700 text-lg text-center mx-4 md:mx-16 lg:mx-16 xl:mx-24 mb-8 whitespace-pre-line">
            {projectDescription}
          </p>
          <Link href="/projects" passHref>
            <button className="mt-8 bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-md">
              Back to Projects
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProjectPage;
