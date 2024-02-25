const { test, expect } = require('@playwright/test');

test.beforeEach(async ({ page }) => {
    await page.goto('http://127.0.0.1:5500/');
});

test('Add a task, confirm it is displayed on the page', async ({ page }) => {    
    // Add a note
    await page.fill('#input-text', 'Test task');
    await page.press('#input-text', 'Enter');
    
    // Confirm it is displayed on the page
    const addedNote = await page.$eval('#result li div label.task', el => el.textContent);
    expect(addedNote).toContain('Test task');
  });

  test('Add a task, confirm "1 item left" is shown, then check it and confirm "0 items left"', async ({ page }) => {    
    // Add a note
    await page.fill('#input-text', 'Test task');
    await page.press('#input-text', 'Enter');
    
    // Confirm "1 item left"
    const itemsLeftText = await page.$eval('#items-left', el => el.textContent);
    expect(itemsLeftText).toContain('1 item left');
    
    // Check the added note
    await page.click('.box');
    
    // Confirm "0 items left"
    const itemsLeftTextAfterCheck = await page.$eval('#items-left', el => el.textContent);
    expect(itemsLeftTextAfterCheck).toContain('0 items left');
  });

  test('Add 3 tasks, check one of them and confirm "2 items left"', async ({ page }) => {    
    // Add 3 notes
    await page.fill('#input-text', 'Task 1');
    await page.press('#input-text', 'Enter');
    await page.fill('#input-text', 'Task 2');
    await page.press('#input-text', 'Enter');
    await page.fill('#input-text', 'Task 3');
    await page.press('#input-text', 'Enter');
    
    // Check one of the notes
    await page.click(':nth-match(.box, 1)');
    
    // Confirm "2 items left"
    const itemsLeftText = await page.$eval('#items-left', el => el.textContent);
    expect(itemsLeftText).toContain('2 items left');
  });