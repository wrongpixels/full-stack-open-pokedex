const { test, describe, expect } = require('@playwright/test')

describe('Pokedex', () => {
  test('front page can be opened', async ({ page }) => {
    await page.goto('')
    await expect(page.getByText('ivysaur')).toBeVisible()
    await expect(page.getByText('character names are trademarks')).toBeVisible()
  })
  test('we can go to a specific page', async ({ page }) => {
    await page.goto('')
    await page.getByText('ivysaur').click()
    await expect(page).toHaveURL(/pokemon\/ivysaur$/)
    await expect(page.getByText('chlorophyll')).toBeVisible()
  })
})
