await page.getByRole('button', { name: 'Create Form' }).first().click();//creatte form

  await page.getByRole('button', { name: 'Create From Scratch' }).click();//create from scratch

await page.getByRole('button', { name: 'Add' }).first().click();//add question

await page.getByRole('button', { name: 'Add' }).nth(5).click();//add question type

  await page.locator('div:nth-child(10) > .flex.justify-between > .ant-btn').click();//add question to form

    await page.getByRole('button', { name: 'Edit Form' }).click();//edit form

      await page.getByRole('button', { name: 'Close' }).click();// close button





