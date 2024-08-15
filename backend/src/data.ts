
export const sample_components: any[] = [
  {
    id: '0',
    name: 'Server Search Bar',
    icon: 'bi-search',
    animation: 'animate__animated animate__fadeIn',
    description: 'A search bar allows users to search for content.',
    code: `<input type="text" class="form-control" placeholder="Search...">`
  },
  {
    id: '1',
    name: 'Server Tooltip',
    icon: 'bi-info-circle',
    animation: 'animate__animated animate__fadeIn',
    description: 'A tooltip provides additional information on hover.',
    code: `
  <div class="container mt-3">
    <button type="button" class="btn btn-secondary" data-bs-toggle="tooltip" placement="top" title="Tooltip on top">
        Tooltip on top
    </button>
    <button type="button" class="btn btn-outline-secondary me-2" placement="end" ngbTooltip="Tooltip on right">
        Tooltip on right
    </button>
    <button type="button" class="btn btn-outline-secondary me-2" placement="bottom" ngbTooltip="Tooltip on bottom">
        Tooltip on bottom
    </button>
    <button type="button" class="btn btn-outline-secondary me-2" placement="start" ngbTooltip="Tooltip on left">
        Tooltip on left
    </button>
  </div>`
  },
  {
    id: '2',
    name: 'Server Popover',
    icon: 'bi-window',
    animation: 'animate__animated animate__fadeIn',
    description: 'A popover provides additional information on click.',
    code: `
<button
	type="button"
	class="btn btn-outline-secondary me-2"
	placement="top"
	ngbPopover="Vivamus sagittis lacus vel augue laoreet rutrum faucibus."
	popoverTitle="Popover on top"
>
	Popover on top
</button>

<button
	type="button"
	class="btn btn-outline-secondary me-2"
	placement="end"
	ngbPopover="Vivamus sagittis lacus vel augue laoreet rutrum faucibus."
	popoverTitle="Popover on right"
>
	Popover on right
</button>

<button
	type="button"
	class="btn btn-outline-secondary me-2"
	placement="bottom"
	ngbPopover="Vivamus sagittis lacus vel augue laoreet rutrum faucibus."
	popoverTitle="Popover on bottom"
>
	Popover on bottom
</button>

<button
	type="button"
	class="btn btn-outline-secondary me-2"
	placement="start"
	ngbPopover="Vivamus sagittis lacus vel augue laoreet rutrum faucibus."
	popoverTitle="Popover on left"
>
	Popover on left
</button>`
  }
];
