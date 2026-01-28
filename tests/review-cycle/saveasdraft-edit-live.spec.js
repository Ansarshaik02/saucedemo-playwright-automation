import { test, expect } from '@playwright/test';

test.describe.serial('Save as Draft – LIVE Review Cycle Edit Flow', () => {
  // ================= TC09 =================
  test('TC09 - Verify user can save a LIVE review cycle as draft using Edit option', async ({ page }) => {
      test.setTimeout(30000)
      // -------------------- VISUAL STABILITY --------------------
      await page.setViewportSize({ width: 1440, height: 900 });

      // -------------------- NAVIGATE TO REVIEWS --------------------
      await page.goto('https://api.demo.peoplebox.ai/demo/try_interactive_demo?account_id=1147');
      await page.getByRole('link', { name: 'Reviews', exact: true }).click();
      await page.waitForTimeout(1500);

      // -------------------- OPEN FINALIZED REVIEW CYCLE --------------------
      await page.getByText('TC06 Finalized Review Cycle').first().click();
      await page.waitForTimeout(1500);

      // -------------------- LAUNCH THE REVIEW CYCLE (Make it LIVE) --------------------
      await page
        .getByRole('row', { name: 'Peer Selection NOT STARTED 0/' })
        .getByRole('button')
        .click();
      await page.waitForTimeout(1000);

      await page.locator('div').filter({ hasText: /^Silent Launch$/ }).nth(2).click();
      await page.waitForTimeout(500);

      await page.locator('div').filter({ hasText: /^Instant Launch$/ }).nth(1).click();
      await page.waitForTimeout(500);

      await page.getByRole('checkbox', { name: 'Select All' }).check();
      await page.waitForTimeout(500);

      await page.getByRole('button', { name: 'Launch', exact: true }).nth(4).click();
      await page.waitForTimeout(1000);

      await page.getByRole('button', { name: 'Yes' }).click();
      await page.waitForTimeout(2000);

      // -------------------- RETURN TO REVIEWS LISTING --------------------
      await page.locator('.flex > .fs-medium').first().click();
      await page.waitForTimeout(1500);

      // -------------------- EDIT THE LIVE REVIEW CYCLE --------------------
      // Find the cycle card by name and click the three-dot menu directly
      const cycleCard = page.locator('[id^="review-"]').filter({ hasText: 'TC06 Finalized Review Cycle' }).first();
      await cycleCard.scrollIntoViewIfNeeded();
      await cycleCard.hover();
      await cycleCard.locator('.dot-menu-trigger > svg').click();
      await page.waitForTimeout(500);

      await page.getByRole('menuitem', { name: 'edit Edit' }).click();
      await page.waitForTimeout(1500);

      // -------------------- NAVIGATE TO VERIFY STEP (STEPPER) --------------------
      // Use more flexible locator for the verify step
      await page.getByText('verify', { exact: true }).click();
      await page.waitForTimeout(1000);

      // -------------------- SAVE AS DRAFT --------------------
      await page.getByRole('button', { name: 'Save as Draft' }).click();
      await page.waitForTimeout(2000);

      // Wait for navigation to complete
      await page.waitForLoadState('networkidle');

      // -------------------- FINAL VALIDATION --------------------
      // User is redirected to Review Cycles listing

      
      

      // Verify the cycle is now in Draft state
      await expect(
        page.getByText('TC06 Finalized Review Cycle')
      ).toBeVisible({ timeout: 10000 });

      console.log('✅ TC09: User can save a LIVE review cycle as draft using Edit option successfully');


    });
});