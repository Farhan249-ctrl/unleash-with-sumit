import { test as base } from '@playwright/test';

// Define custom fixtures for UnleashWithSumit Book testing
export const test = base.extend({
  // Add custom test fixtures here if needed
  // Example: page, context, etc.
});

export const expect = test.expect;
