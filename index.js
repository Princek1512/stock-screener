// Calculator functionality
document.addEventListener('DOMContentLoaded', function() {
    // Calculator
    let input = document.getElementById("inputBox");
    let buttons = document.querySelectorAll(".btan");
    let string = "";
    
    buttons.forEach(button => {
      button.addEventListener('click', (e) => {
        const value = e.target.innerHTML;
        
        if (value === "=") {
          try {
            string = eval(string);
            input.value = string;
          } catch (error) {
            input.value = "Error";
            setTimeout(() => {
              string = "";
              input.value = "0";
            }, 1000);
          }
        }
        else if (value === "AC") {
          string = "";
          input.value = "0";
        }
        else if (value === "Del") {
          string = string.slice(0, -1);
          input.value = string || "0";
        }
        else {
          string += value;
          input.value = string;
        }
      });
    });
  
    // Date and time display
    function updateDateTime() {
      const now = new Date();
      const days = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'];
      const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
      
      const day = days[now.getDay()];
      const date = `${now.getDate()} ${months[now.getMonth()]}`;
      
      let hours = now.getHours();
      const ampm = hours >= 12 ? 'PM' : 'AM';
      hours = hours % 12;
      hours = hours ? hours : 12; // the hour '0' should be '12'
      const minutes = now.getMinutes().toString().padStart(2, '0');
      const seconds = now.getSeconds().toString().padStart(2, '0');
      
      document.getElementById('curday').textContent = day;
      document.getElementById('curdate').textContent = date;
      document.getElementById('curtime').textContent = `${hours}:${minutes}:${seconds} ${ampm}`;
    }
    
    updateDateTime();
    setInterval(updateDateTime, 1000);
  
    // Currency Converter (simulated)
    document.getElementById('convert-btn').addEventListener('click', function() {
      const amount = parseFloat(document.getElementById('amount').value) || 1;
      const fromCurrency = document.getElementById('from').value;
      const toCurrency = document.getElementById('to').value;
      
      // Simulated conversion rates (in a real app, you'd use an API)
      const rates = {
        USD: { EUR: 0.85, GBP: 0.73, INR: 82.50 },
        EUR: { USD: 1.18, GBP: 0.86, INR: 97.00 },
        GBP: { USD: 1.37, EUR: 1.16, INR: 112.50 },
        INR: { USD: 0.012, EUR: 0.010, GBP: 0.0089 }
      };
      
      if (fromCurrency === toCurrency) {
        document.getElementById('result').textContent = `${amount} ${fromCurrency} = ${amount} ${toCurrency}`;
      } else {
        const rate = rates[fromCurrency][toCurrency];
        const converted = (amount * rate).toFixed(2);
        document.getElementById('result').textContent = `${amount} ${fromCurrency} = ${converted} ${toCurrency}`;
      }
    });
  });
  
  // Financial quotes array
  const quotes = [
    {
      text: "The stock market is filled with individuals who know the price of everything, but the value of nothing.",
      author: "Philip Fisher"
    },
    {
      text: "Investing should be more like watching paint dry or watching grass grow. If you want excitement, take $800 and go to Las Vegas.",
      author: "Paul Samuelson"
    },
    {
      text: "The four most dangerous words in investing are: 'This time it's different.'",
      author: "Sir John Templeton"
    },
    {
      text: "Risk comes from not knowing what you're doing.",
      author: "Warren Buffett"
    },
    {
      text: "In investing, what is comfortable is rarely profitable.",
      author: "Robert Arnott"
    }
  ];
  
  // Display random quote
  function displayRandomQuote() 
  {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    const quote = quotes[randomIndex];
    document.getElementById('quote').textContent = `"${quote.text}"`;
    document.getElementById('author').textContent = `- ${quote.author}`;
  }
  

  displayRandomQuote();

  setInterval(displayRandomQuote, 10000);
