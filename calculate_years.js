const fs = require('fs');
const path = require('path');

// Read the JSON file
const filePath = path.join(__dirname, 'src', 'component', 'experience', 'experienceList.json');
const data = JSON.parse(fs.readFileSync(filePath, 'utf8'));

// Month name mapping (handling various formats)
const monthMap = {
  'jan': 0, 'january': 0,
  'feb': 1, 'february': 1,
  'mar': 2, 'march': 2,
  'apr': 3, 'april': 3,
  'may': 4,
  'jun': 5, 'june': 5,
  'july': 6, 'jul': 6,
  'aug': 7, 'august': 7,
  'sep': 8, 'september': 8, 'sept': 8,
  'oct': 9, 'october': 9,
  'nov': 10, 'november': 10,
  'dec': 11, 'december': 11
};

function parseDate(dateString) {
  // Format: "22/july/2024" or "1/Dec/2022"
  const parts = dateString.split('/');
  if (parts.length !== 3) {
    throw new Error(`Invalid date format: ${dateString}`);
  }
  
  const day = parseInt(parts[0], 10);
  const monthName = parts[1].toLowerCase();
  const year = parseInt(parts[2], 10);
  
  const month = monthMap[monthName];
  if (month === undefined) {
    throw new Error(`Invalid month name: ${parts[1]}`);
  }
  
  return new Date(year, month, day);
}

function calculateYears(dateOfJoining, dateOfResign) {
  const startDate = parseDate(dateOfJoining);
  const endDate = parseDate(dateOfResign);
  
  // Calculate difference in milliseconds
  const diffMs = endDate - startDate;
  
  // Convert to years (approximate: 365.25 days per year to account for leap years)
  const diffYears = diffMs / (1000 * 60 * 60 * 24 * 365.25);
  
  // Round to 2 decimal places
  return Math.round(diffYears * 100) / 100;
}

// Update each experience entry
data.experience.forEach((exp, index) => {
  if (exp.dateOfJoining && exp.dateOfResign) {
    try {
      const years = calculateYears(exp.dateOfJoining, exp.dateOfResign);
      exp.years = years;
      console.log(`${exp.companyName}: ${exp.dateOfJoining} to ${exp.dateOfResign} = ${years} years`);
    } catch (error) {
      console.error(`Error calculating years for ${exp.companyName}:`, error.message);
    }
  }
});

// Write back to file
fs.writeFileSync(filePath, JSON.stringify(data, null, 2), 'utf8');
console.log('\nFile updated successfully!');

