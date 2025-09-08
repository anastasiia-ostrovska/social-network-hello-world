export const logSuccess = (data: unknown) => {
  if (typeof data === 'object' && data !== null && 'message' in data) {
    console.log('✅ SUCCESS:', data.message);
  }
};

export const logError = (error: unknown) => {
  console.error('❌ ERROR:', error);
};
