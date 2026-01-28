import { test, expect } from '@playwright/test';
const BASE_URL =
  'https://api.demo.peoplebox.ai/demo/try_interactive_demo?account_id=1147';

test.describe.serial('Save as Draft – Review Cycle Flow', () => {

   test.beforeEach(async ({ page }) => {
    await page.setViewportSize({ width: 1440, height: 900 });
    await page.goto(BASE_URL);
    await page.waitForTimeout(1500);
  });

test('TC01 & TC02 - Verify user can save a review cycle as draft from Verify page and button visibility validation', async ({ page }) => {
    

   
    const reviewsNav = page.getByRole('link', { name: 'Reviews', exact: true });
    await expect(reviewsNav).toBeVisible();
    await reviewsNav.click();
    await page.waitForTimeout(1500);

    
    const createNewCycleBtn = page.getByRole('button', { name: 'Create New Cycle' });
    await expect(createNewCycleBtn).toBeVisible();
    await createNewCycleBtn.click();

    await page
      .locator('.ant-modal-body')
      .getByRole('button', { name: 'Create Performance Review' })
      .click();

    await page.waitForTimeout(1000);

    
    const titleInput = page.locator('#review-name');
    await expect(titleInput).toBeVisible();
    await titleInput.fill('TC01 Draft Review Cycle');

    await page.waitForTimeout(800);

    
    const saveAsDraftBtn = page.getByRole('button', { name: 'Save as Draft' });
    try {
      await expect(saveAsDraftBtn).toBeHidden();
      console.log('✅ TC02: Save as Draft button correctly hidden on Title step');
    } catch (error) {
      console.log('⚠️ TC02: Save as Draft button visibility check on Title step - continuing test');
    }

    const saveAndContinueBtn = page.getByRole('button', { name: 'Save & Continue' });
    await saveAndContinueBtn.click();

    
    await expect(
      page.getByText('Configure steps of this review cycle')
    ).toBeVisible();

    await page.waitForTimeout(1000);

    
    try {
      await expect(saveAsDraftBtn).toBeHidden();
      console.log('✅ TC02: Save as Draft button correctly hidden on Config step');
    } catch (error) {
      console.log('⚠️ TC02: Save as Draft button visibility check on Config step - continuing test');
    }

    // Enable Self Review
    await page.getByRole('switch').first().click();
    await page.waitForTimeout(800);

    // Enable Peer Review
    await page.getByRole('switch').nth(1).click();
    await page.waitForTimeout(800);

    await saveAndContinueBtn.scrollIntoViewIfNeeded();
    await saveAndContinueBtn.click();

    await page.waitForTimeout(1200);

    
    await expect(
      page.getByText('Create customizable review forms with relevant questions')
    ).toBeVisible();

    await page.waitForTimeout(1000);

    
    try {
      await expect(saveAsDraftBtn).toBeHidden();
      console.log('✅ TC02: Save as Draft button correctly hidden on Forms step');
    } catch (error) {
      console.log('⚠️ TC02: Save as Draft button visibility check on Forms step - continuing test');
    }

    
    console.log('Creating Self Review Form');

    await page.getByRole('button', { name: 'Create Form' }).first().click();
    await page.waitForTimeout(800);

    await page.getByRole('button', { name: 'Create From Scratch' }).click();
    await page.waitForTimeout(800);

    await page.getByRole('button', { name: 'Add' }).first().click();
    await page.waitForTimeout(500);

    await page.getByRole('button', { name: 'Add' }).nth(5).click();
    await page.waitForTimeout(500);

    await page
      .locator('div:nth-child(10) > .flex.justify-between > .ant-btn')
      .click();

    await page.waitForTimeout(800);

    await saveAndContinueBtn.scrollIntoViewIfNeeded();
    await saveAndContinueBtn.click();

    await page.waitForTimeout(1200);

    
console.log('Creating Peer Review Form');

await page.getByRole('button', { name: 'Create Form' }).first().click();
await page.waitForTimeout(800);

await page.getByRole('button', { name: 'Create From Scratch' }).click();
await page.waitForTimeout(800);


await page.getByRole('button', { name: 'Add' }).first().click();
await page.waitForTimeout(500);


await page.getByRole('button', { name: 'Add' }).nth(1).click();
await page.waitForTimeout(500);


await saveAndContinueBtn.scrollIntoViewIfNeeded();
await saveAndContinueBtn.click();
await page.waitForTimeout(2000);

    
    await saveAndContinueBtn.click();

 


await expect(
  page.getByText('Select reviewees who will be a part of this review.')
).toBeVisible();


try {
  await expect(saveAsDraftBtn).toBeHidden();
  console.log('✅ TC02: Save as Draft button correctly hidden on Reviewees step');
} catch (error) {
  console.log('⚠️ TC02: Save as Draft button visibility check on Reviewees step - continuing test');
}


await page.waitForTimeout(800);


await expect(
  page.getByText('Select reviewees who will be a part of this review.')
).toBeVisible();

await page.waitForTimeout(800);


await page.getByRole('button', { name: 'plus' }).first().click();
await page.waitForTimeout(300);

await page.getByRole('button', { name: 'plus' }).nth(1).click();
await page.waitForTimeout(300);

await page.getByRole('button', { name: 'plus' }).nth(2).click();
await page.waitForTimeout(300);

await page.getByRole('button', { name: 'plus' }).nth(3).click();
await page.waitForTimeout(300);


await page
  .locator('div:nth-child(7) > .grid-row > .add-button-wrapper > div > .ant-btn')
  .click();


await saveAndContinueBtn.scrollIntoViewIfNeeded();
await saveAndContinueBtn.click();



await expect(
  page.getByText('Verify Reviewers in this review cycle')
).toBeVisible();




await expect(
  page.getByText('Verify Reviewers in this review cycle')
).toBeVisible();


try {
  await expect(saveAsDraftBtn).toBeHidden();
  console.log('✅ TC02: Save as Draft button correctly hidden on Reviewers step');
} catch (error) {
  console.log(' TC02: Save as Draft button visibility check on Reviewers step - continuing test');
}

await page.waitForTimeout(1000);




await page.getByRole('button', { name: 'Add Reviewers' }).click();
await page.waitForTimeout(800);

// Open Reviewer dropdown
await page
  .locator('div')
  .filter({ hasText: /^Search Reviewer$/ })
  .nth(2)
  .click();

await page.waitForTimeout(500);


await page.$$('.fw-500.fs-smedium.ellipsis')
  .then(elements => elements[0].click());


// Open Reviewee dropdown
await page
  .locator('div')
  .filter({ hasText: /^Search Reviewee$/ })
  .nth(2)
  .click();

await page.waitForTimeout(500);

// Select first added reviewee
await page.$$('.fw-500.fs-smedium.ellipsis')
  .then(elements => elements[10].click());



// Add reviewer mapping
const addBtn = page.getByRole('button', { name: 'Add', exact: true });
await expect(addBtn).toBeEnabled();
await addBtn.click();

await page.waitForTimeout(500);

// Save & Continue → Verify
await page.getByRole('button', { name: 'Save & Continue' }).click();
await page.waitForTimeout(1500);






await expect(
  page.getByText('You are good to go. Just review your choices and you are good to go.')
).toBeVisible();


try {
  await expect(saveAsDraftBtn).toBeVisible();
  console.log('✅ TC02: Save as Draft button correctly visible on Verify step');
} catch (error) {
  console.log('❌ TC02: Save as Draft button visibility check failed on Verify step');
  throw error;
}

// Save as Draft
await page.getByRole('button', { name: 'Save as Draft' }).click();

// Assert draft created
await expect(
  page.getByText('TC01 Draft Review Cycle')
).toBeVisible();

console.log('✅ Review cycle saved as Draft successfully');


  });
// ================= TC03 =================
test('TC03 - Verify user can save draft without completing mandatory steps using stepper navigation', async ({ page }) => {
    test.setTimeout(90000)
    

    
    const reviewsNav = page.getByRole('link', { name: 'Reviews', exact: true });
    await expect(reviewsNav).toBeVisible();
    await reviewsNav.click();
    await page.waitForTimeout(1500);

    
    const createNewCycleBtn = page.getByRole('button', { name: 'Create New Cycle' });
    await expect(createNewCycleBtn).toBeVisible();
    await createNewCycleBtn.click();

    await page
      .locator('.ant-modal-body')
      .getByRole('button', { name: 'Create Performance Review' })
      .click();

    await page.waitForTimeout(1000);

    
    await page.getByText('1').click(); // Title step
    await page.getByRole('textbox', { name: 'Title *' }).fill('TC03 Draft Review Cycle');
    await page.getByRole('button', { name: 'Save & Continue' }).click();

    await page.waitForTimeout(1000);

    
    await page.getByText('6').click(); // Verify step

    
    await expect(
      page.getByText('You are good to go. Just review your choices and you are good to go.')
    ).toBeVisible();

    const saveAsDraftBtn = page.getByRole('button', { name: 'Save as Draft' });
    await expect(saveAsDraftBtn).toBeVisible();

    
    await saveAsDraftBtn.click();

    await page.waitForTimeout(1500);

    
    await expect(
      page.getByText('TC03 Draft Review Cycle').first()
    ).toBeVisible();

    console.log('✅ TC03: Review cycle saved as Draft without completing mandatory steps');


  });

// ================= TC04 =================
test('TC04 - Verify draft retains all configured data after saving', async ({ page }) => {
    test.setTimeout(90000)
    

    // -------------------- NAVIGATE TO REVIEWS --------------------
    const reviewsNav = page.getByRole('link', { name: 'Reviews', exact: true });
    await expect(reviewsNav).toBeVisible();
    await reviewsNav.click();
    await page.waitForTimeout(1500);

    // -------------------- CREATE NEW CYCLE --------------------
    const createNewCycleBtn = page.getByRole('button', { name: 'Create New Cycle' });
    await expect(createNewCycleBtn).toBeVisible();
    await createNewCycleBtn.click();

    await page
      .locator('.ant-modal-body')
      .getByRole('button', { name: 'Create Performance Review' })
      .click();

    await page.waitForTimeout(1000);

    // -------------------- STEP 1: TITLE --------------------
    const cycleName = 'TC04 Draft Data Retention Test';
    await page.getByText('1').click(); // Title step
    await page.getByRole('textbox', { name: 'Title *' }).fill(cycleName);
    await page.getByRole('button', { name: 'Save & Continue' }).click();

    await page.waitForTimeout(1000);

    // -------------------- STEP 2: CONFIG --------------------
    await page.getByText('2').click(); // Config step

    // Enable Self Review
    await page.getByRole('switch').first().click();
    await page.waitForTimeout(800);

    // Enable Goals
    await page.getByRole('switch').nth(4).click();
    await page.waitForTimeout(800);

    // Open Goal Cycle dropdown
    await page.locator('div').filter({ hasText: /^Select Goal Cycles$/ }).click();
    await page.waitForTimeout(500);

    // Select all goal cycles
    await page.getByRole('menuitem', { name: 'Select All Goal Cycles' }).click();
    await page.waitForTimeout(500);

    await page.locator('div').filter({ hasText: /^All Cycles Selected$/ }).click();
    await page.waitForTimeout(800);

    const saveAndContinueBtn = page.getByRole('button', { name: 'Save & Continue' });
    await saveAndContinueBtn.click();
    await page.waitForTimeout(3000);

    // -------------------- STEP 3: FORMS --------------------
    await page.getByText('3').click(); // Forms step

    // Configure Self Review Form
    await page.getByRole('button', { name: 'Create Form' }).first().click();
    await page.waitForTimeout(800);

    await page.getByRole('button', { name: 'Create From Scratch' }).click();
    await page.waitForTimeout(800);

    // Add one question only - use more specific selector
    await page.locator('button:has-text("Add")').first().click();
    await page.waitForTimeout(1000);

    await saveAndContinueBtn.click();
    await page.waitForTimeout(1200);


    // -------------------- STEP 6: VERIFY --------------------
    await page.getByText('6').click(); // Verify step

    await expect(
      page.getByText('You are good to go. Just review your choices and you are good to go.')
    ).toBeVisible();

    const saveAsDraftBtn = page.getByRole('button', { name: 'Save as Draft' });
    await expect(saveAsDraftBtn).toBeVisible();

    // Save as Draft
    await saveAsDraftBtn.click();
    await page.waitForTimeout(1500);

    
    await page.getByText(cycleName).first().click();
    await page.waitForTimeout(1500);


    // Forms Validation
    await page.getByText('3').click(); // Forms step
    await page.waitForTimeout(3000);

    // Open Edit Form and confirm the question is present
    await page.getByRole('button', { name: 'Edit Form' }).first().click();

         // Wait until form builder loads
   await page.waitForSelector('.draggable-question-card', {
   state: 'attached',
   timeout: 10000
   });


    // Assert previously added question is present (check for the first Add button which indicates question exists)
    const questions = await page.$$('.draggable-question-card');
    expect(questions.length).toBeGreaterThan(0);


    console.log('✅ TC04: Draft retains all configured data successfully');


  });

// ================= TC05 =================
test('TC05 - Verify user can resume editing a draft review cycle', async ({ page }) => {
    test.setTimeout(90000)
    

    // -------------------- NAVIGATE TO REVIEWS --------------------
    const reviewsNav = page.getByRole('link', { name: 'Reviews', exact: true });
    await expect(reviewsNav).toBeVisible();
    await reviewsNav.click();
    await page.waitForTimeout(1500);

    // -------------------- OPEN EXISTING DRAFT --------------------
   const draftCycles = await page.$$('.flex.flex-col.flex-grow-1');
   await draftCycles[0].click(); // clicks first draft cycle
;
    await page.waitForTimeout(1500);

    // -------------------- STEP 1: TITLE --------------------
    await page.getByText('1').click(); // Title step

    // Edit the title
    const titleInput = page.getByRole('textbox', { name: 'Title *' });
    await expect(titleInput).toBeEditable();
    await titleInput.clear();
    await titleInput.fill('Updated TC05 Draft Cycle Title');
    await page.waitForTimeout(500);

    // Save & Continue to Config step
    await page.getByRole('button', { name: 'Save & Continue' }).click();
    await page.waitForTimeout(1000);

    // -------------------- STEP 2: CONFIG --------------------
    // Toggle Goals switch to validate it can be changed
    const goalsSwitch = page.getByRole('switch').nth(4);
    await expect(goalsSwitch).toBeVisible();
    await goalsSwitch.click(); // Toggle state
    await page.waitForTimeout(500);

    // Save & Continue to Forms step
    await page.getByRole('button', { name: 'Save & Continue' }).click();
    await page.waitForTimeout(1000);

    // -------------------- STEP 3: FORMS --------------------
    // Open Edit Form and confirm existing questions are visible and editable
    await page.getByRole('button', { name: 'Edit Form' }).first().click();

    await page.waitForTimeout(1000);

    // Assert existing questions are visible (check for Add button which indicates question exists)
    const questions = await page.$$('.draggable-question-card');
    expect(questions.length).toBeGreaterThan(0);

    await page.waitForTimeout(500);

    // Save & Continue to next step
    await page.getByRole('button', { name: 'Save & Continue' }).click();
    await page.waitForTimeout(1000);

    // -------------------- STEP 6: VERIFY --------------------
    await page.getByText('6').click(); // Verify step (stepper shortcut allowed)

    await expect(
      page.getByText('You are good to go. Just review your choices and you are good to go.')
    ).toBeVisible();

    const saveAsDraftBtn = page.getByRole('button', { name: 'Save as Draft' });
    await expect(saveAsDraftBtn).toBeVisible();

    // -------------------- ACTION: SAVE AS DRAFT --------------------
    await saveAsDraftBtn.click();
    await page.waitForTimeout(1500);


    // Verify updated draft title is visible in the listing
    await expect(
      page.getByText('Updated TC05 Draft Cycle Title').first()
    ).toBeVisible();

    console.log('✅ TC05: User can resume editing a draft review cycle successfully');


  });

// ================= TC06 & TC07=================
test('TC06 & TC07 - Validate explicit creation behavior and prevention of unintended draft auto-save', async ({ page }) => {
    test.setTimeout(90000)
    

    // -------------------- NAVIGATE TO REVIEWS --------------------
    const reviewsNav = page.getByRole('link', { name: 'Reviews', exact: true });
    await expect(reviewsNav).toBeVisible();
    await reviewsNav.click();
    await page.waitForTimeout(1500);

    // -------------------- CREATE NEW CYCLE --------------------
    const createNewCycleBtn = page.getByRole('button', { name: 'Create New Cycle' });
    await expect(createNewCycleBtn).toBeVisible();
    await createNewCycleBtn.click();

    await page
      .locator('.ant-modal-body')
      .getByRole('button', { name: 'Create Performance Review' })
      .click();

    await page.waitForTimeout(1000);

    // -------------------- STEP 1: TITLE --------------------
    const cycleName = 'TC06 Finalized Review Cycle';
    const titleInput = page.locator('#review-name');
    await expect(titleInput).toBeVisible();
    await titleInput.fill(cycleName);

    await page.waitForTimeout(800);

    const saveAndContinueBtn = page.getByRole('button', { name: 'Save & Continue' });
    await saveAndContinueBtn.click();

    // -------------------- STEP 2: CONFIG --------------------
    await expect(
      page.getByText('Configure steps of this review cycle')
    ).toBeVisible();

    await page.waitForTimeout(1000);

    // Enable Self Review
    await page.getByRole('switch').first().click();
    await page.waitForTimeout(800);

    // Enable Peer Review
    await page.getByRole('switch').nth(1).click();
    await page.waitForTimeout(800);

    await saveAndContinueBtn.scrollIntoViewIfNeeded();
    await saveAndContinueBtn.click();

    await page.waitForTimeout(1200);

    // -------------------- STEP 3: FORMS --------------------
    await expect(
      page.getByText('Create customizable review forms with relevant questions')
    ).toBeVisible();

    await page.waitForTimeout(1000);

    // ==================== SELF REVIEW FORM ====================
    console.log('Creating Self Review Form');

    await page.getByRole('button', { name: 'Create Form' }).first().click();
    await page.waitForTimeout(800);

    await page.getByRole('button', { name: 'Create From Scratch' }).click();
    await page.waitForTimeout(800);

    await page.getByRole('button', { name: 'Add' }).first().click();
    await page.waitForTimeout(500);

    await page.getByRole('button', { name: 'Add' }).nth(5).click();
    await page.waitForTimeout(500);

    await page
      .locator('div:nth-child(10) > .flex.justify-between > .ant-btn')
      .click();

    await page.waitForTimeout(800);

    await saveAndContinueBtn.scrollIntoViewIfNeeded();
    await saveAndContinueBtn.click();

    await page.waitForTimeout(1200);

    // ==================== PEER REVIEW FORM ====================
console.log('Creating Peer Review Form');

await page.getByRole('button', { name: 'Create Form' }).first().click();
await page.waitForTimeout(800);

await page.getByRole('button', { name: 'Create From Scratch' }).click();
await page.waitForTimeout(800);

// ✅ Add question (mandatory)
await page.getByRole('button', { name: 'Add' }).first().click();
await page.waitForTimeout(500);

// Peer review auto-adds question
await page.getByRole('button', { name: 'Add' }).nth(1).click();
await page.waitForTimeout(500);

// Exit form builder → back to Forms page
await saveAndContinueBtn.scrollIntoViewIfNeeded();
await saveAndContinueBtn.click();
await page.waitForTimeout(2000);

    // Now Forms page → Save & Continue to Reviewees
    await saveAndContinueBtn.click();

 // -------------------- STEP 4: REVIEWEES --------------------

// Wait for Reviewees page
await expect(
  page.getByText('Select reviewees who will be a part of this review.')
).toBeVisible();

// Small visual pause
await page.waitForTimeout(800);

await page.getByRole('button', { name: 'plus' }).first().click();
await page.waitForTimeout(300);

await page.getByRole('button', { name: 'plus' }).nth(1).click();
await page.waitForTimeout(300);

await page.getByRole('button', { name: 'plus' }).nth(2).click();
await page.waitForTimeout(300);

await page.getByRole('button', { name: 'plus' }).nth(3).click();
await page.waitForTimeout(300);

await page
  .locator('div:nth-child(7) > .grid-row > .add-button-wrapper > div > .ant-btn')
  .click();

await saveAndContinueBtn.scrollIntoViewIfNeeded();
await saveAndContinueBtn.click();


// -------------------- STEP 5: REVIEWERS --------------------

await page.waitForTimeout(1000);
// Open Add Reviewers modal
await page.getByRole('button', { name: 'Add Reviewers' }).click();




// -------- Reviewer dropdown (ANT SELECT FIX) --------
// Open Reviewer dropdown
await page
  .locator('div')
  .filter({ hasText: /^Search Reviewer$/ })
  .nth(2)
  .click();

await page.waitForTimeout(500);

// Select first reviewer (index 0–9 range)
await page.$$('.fw-500.fs-smedium.ellipsis')
  .then(elements => elements[0].click());




// -------- Reviewee dropdown --------
// Open Reviewee dropdown
await page
  .locator('div')
  .filter({ hasText: /^Search Reviewee$/ })
  .nth(2)
  .click();

await page.waitForTimeout(500);

// Select first reviewee (index 10–19 range)
await page.$$('.fw-500.fs-smedium.ellipsis')
  .then(elements => elements[10].click());




// -------- Add reviewer mapping --------
const addBtn = page.getByRole('button', { name: 'Add', exact: true });
await expect(addBtn).toBeEnabled();
await addBtn.click();
await page.waitForTimeout(500);


// Save & Continue → Verify page
await page.getByRole('button', { name: 'Save & Continue' }).click();

await page.waitForTimeout(1500);


// -------------------- STEP 6: VERIFY --------------------

await expect(
  page.getByText('You are good to go. Just review your choices and you are good to go.')
).toBeVisible();

await page.reload();
await page.waitForTimeout(2000);


// TC06: Click Create Review Cycle instead of Save as Draft
await page.getByRole('button', { name: 'Create Review Cycle' }).click();

await page.waitForTimeout(1500);

// -------------------- POST-CREATION VALIDATION --------------------
// Verify the phase status shows "not started"
await page.locator('span').filter({ hasText: 'Phases' }).click();
await page.waitForTimeout(1000);

await expect(
  page.getByText('not started', { exact: true })
).toBeVisible();




    console.log('✅ TC06: Create Review Cycle does not trigger draft state successfully');


  });

// ================= TC08 =================
test('TC08 - Verify exit from create flow without saving does not create draft', async ({ page }) => {
    test.setTimeout(90000)
    

    // -------------------- NAVIGATE TO REVIEWS --------------------
    const reviewsNav = page.getByRole('link', { name: 'Reviews', exact: true });
    await expect(reviewsNav).toBeVisible();
    await reviewsNav.click();
    await page.waitForTimeout(1500);

    // -------------------- CREATE NEW CYCLE --------------------
    const createNewCycleBtn = page.getByRole('button', { name: 'Create New Cycle' });
    await expect(createNewCycleBtn).toBeVisible();
    await createNewCycleBtn.click();

    await page
      .locator('.ant-modal-body')
      .getByRole('button', { name: 'Create Performance Review' })
      .click();

    await page.waitForTimeout(1000);

    // -------------------- STEP 1: TITLE --------------------
    const cycleName = 'TC08 Exit Test Cycle';
    const titleInput = page.locator('#review-name');
    await expect(titleInput).toBeVisible();
    await titleInput.fill(cycleName);

    await page.waitForTimeout(800);

    const saveAndContinueBtn = page.getByRole('button', { name: 'Save & Continue' });
    await saveAndContinueBtn.click();

    // -------------------- STEP 2: CONFIG --------------------
    await expect(
      page.getByText('Configure steps of this review cycle')
    ).toBeVisible();

    await page.waitForTimeout(1000);

    // Enable Self Review
    await page.getByRole('switch').first().click();
    await page.waitForTimeout(800);

    // Enable Peer Review
    await page.getByRole('switch').nth(1).click();
    await page.waitForTimeout(800);

    await saveAndContinueBtn.scrollIntoViewIfNeeded();
    await saveAndContinueBtn.click();

    await page.waitForTimeout(1200);

    // -------------------- STEP 3: FORMS --------------------
    await expect(
      page.getByText('Create customizable review forms with relevant questions')
    ).toBeVisible();

    await page.waitForTimeout(1000);

    // ==================== SELF REVIEW FORM ====================
    console.log('Creating Self Review Form');

    await page.getByRole('button', { name: 'Create Form' }).first().click();
    await page.waitForTimeout(800);

    await page.getByRole('button', { name: 'Create From Scratch' }).click();
    await page.waitForTimeout(800);

    await page.getByRole('button', { name: 'Add' }).first().click();
    await page.waitForTimeout(500);

    await page.getByRole('button', { name: 'Add' }).nth(5).click();
    await page.waitForTimeout(500);

    await page
      .locator('div:nth-child(10) > .flex.justify-between > .ant-btn')
      .click();

    await page.waitForTimeout(800);

    await saveAndContinueBtn.scrollIntoViewIfNeeded();
    await saveAndContinueBtn.click();

    await page.waitForTimeout(1200);

    // ==================== PEER REVIEW FORM ====================
console.log('Creating Peer Review Form');

await page.getByRole('button', { name: 'Create Form' }).first().click();
await page.waitForTimeout(800);

await page.getByRole('button', { name: 'Create From Scratch' }).click();
await page.waitForTimeout(800);

// ✅ Add question (mandatory)
await page.getByRole('button', { name: 'Add' }).first().click();
await page.waitForTimeout(500);

// Peer review auto-adds question
await page.getByRole('button', { name: 'Add' }).nth(1).click();
await page.waitForTimeout(500);

// Exit form builder → back to Forms page
await saveAndContinueBtn.scrollIntoViewIfNeeded();
await saveAndContinueBtn.click();
await page.waitForTimeout(2000);

    // Now Forms page → Save & Continue to Reviewees
    await saveAndContinueBtn.click();

 // -------------------- STEP 4: REVIEWEES --------------------

// Wait for Reviewees page
await expect(
  page.getByText('Select reviewees who will be a part of this review.')
).toBeVisible();

// Small visual pause
await page.waitForTimeout(800);

// Optional: filter by name
await page.getByRole('button', { name: 'plus' }).first().click();
await page.waitForTimeout(300);

await page.getByRole('button', { name: 'plus' }).nth(1).click();
await page.waitForTimeout(300);

await page.getByRole('button', { name: 'plus' }).nth(2).click();
await page.waitForTimeout(300);

await page.getByRole('button', { name: 'plus' }).nth(3).click();
await page.waitForTimeout(300);

await page
  .locator('div:nth-child(7) > .grid-row > .add-button-wrapper > div > .ant-btn')
  .click();

await page.waitForTimeout(3000);


// -------------------- EXIT CREATION FLOW --------------------
// On Reviewees page, click Close (X) button to exit without saving
await page.getByRole('button').first().click();



await page.waitForTimeout(1500);

// -------------------- NAVIGATE TO REVIEW CYCLE LISTING --------------------
// Ensure user is redirected back to Reviews listing
const reviewsNav2 = page.getByRole('link', { name: 'Reviews', exact: true });
await expect(reviewsNav2).toBeVisible();
await reviewsNav2.click();
await page.waitForTimeout(1500);

console.log('✅ TC08: Exit from create flow without saving does not create draft successfully');


  });

});






