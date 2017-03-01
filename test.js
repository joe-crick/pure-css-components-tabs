var test = require('tape');
var MockBrowser = require('mock-browser').mocks.MockBrowser;
var Tabs = require('./index.js');

function setUp() {
  const mock = new MockBrowser();
  document = mock.getDocument();
  document.body.innerHTML = `<ul class="accordion accordion-tab">
    <li class="accordion-section">
        <input type="radio" class="accordion-section-selector pcssc-invisible" id="zero" name="tab-head" role="tab"
               checked/>
        <label for="zero" class="accordion-section-header">Option 0</label>
        <div class="accordion-section-content">
            <h2>Heading 1</h2>
            Donec mattis mauris gravida metus laoreet non rutrum sem viverra. Aenean nibh libero,
            viverra
            vel vestibulum in,
        </div>
    </li>
    <li class="accordion-section">
        <input type="radio" class="accordion-section-selector pcssc-invisible" id="one" name="tab-head" role="tab"/>
        <label for="one" class="accordion-section-header">Option 1</label>
        <div class="accordion-section-content">
            <h2>Heading 1</h2>
            Content goes here
        </div>
    </li>
    <li class="accordion-section">
        <input type="radio" class="accordion-section-selector pcssc-invisible" id="two" name="tab-head" role="tab"/>
        <label for="two" class="accordion-section-header">Option 2</label>
        <div class="accordion-section-content">
            <h2>Heading 2</h2>
            Lorem Ipsum
        </div>
    </li>
</ul>`;
  return document;
}

function tearDown() {
  document = undefined;
}

test('Tabs ', nest => {
  nest.test('Sets a given tab to active', assert => {
    const doc = setUp(false);
    const tab = Tabs('.accordion');
    const tabToBeActive = doc.querySelector('#one');

    tab.setActiveTab(1);
    assert.ok(tabToBeActive.checked, 'tab should be set to active');
    assert.end();
    tearDown();
  });

  nest.test('Ignores a request to show an invalid tab', assert => {
    const doc = setUp(true);
    const tab = Tabs('.accordion');
    const tabToBeActive = doc.querySelector('#zero');

    tab.setActiveTab(9);
    assert.ok(tabToBeActive.checked, 'should ignore an invalid tab index');
    assert.end();
    tearDown();
  });
  

});
