console.log('ya ya wes we get it.. IT WORKS!');
const tabs = document.querySelector('.tabs');
const tabButtons = tabs.querySelectorAll('[role="tab"]');
const tabPanels = Array.from(tabs.querySelectorAll('[role="tabpanel"]'));
// console.log(tabButtons);

function handleTabClick(e) {
  console.log(e.currentTarget);
  // hide all tab panels;
  console.log(tabPanels);
  tabPanels.forEach(panel => {
    panel.hidden = true;
  });
  // mark all tabs as unselected
  tabButtons.forEach(tab => {
    tab.setAttribute('aria-selected', false);
  });
  // mark the clicked tab as selected
  e.currentTarget.setAttribute('aria-selected', true);
  // find the associated tab panel and show it
  const { id } = e.currentTarget;
  //   METHOD 1
  //   const tabPanel = document.querySelector(`[aria-labelledby="${id}"]`);
  //   console.log(tabPanel);
  //   tabPanel.hidden = false;

  // METHOD 2 Find in the array of tabpanels
  const tabPanel = tabPanels.find(panel => {
    if (panel.getAttribute('aria-labelledby') === id) {
      return true;
    }
  });
  tabPanel.hidden = false;
}

tabButtons.forEach(tab => {
  tab.addEventListener('click', handleTabClick);
});
