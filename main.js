let A=4470,f=[...atob("P//3s5zMVV8zMzN3f//4u5hIoZAACsKwAACsABczd//43MaRz2aqq5pcjSpZ3//37mNNTVV7S0rOd//33F1Oqq7HK5v//+4FTVV3UyRIkSJEiMldkM3//27qhWZ007VOlPGMYxjGBToM3f/9xQqjj8M2cYxjGMYrNAu7//Ixa6jxx7TM2cYxjGMYrNAub//uLXXhqKK6OHWGYYQIECBAmhslVru//27i11VV7Aub//uLXUBAgQIECBUOo4476gUs7//uLXVJve973uQ7M6aa7Y1Wu7//uLXRTve973vJqq4gJM3//cWuine973veTR448iHQLkj//cWuine973veTcGoo8wdAub//uLXRTve973vJqq4gXJH/+4tdUHve973sg4nBgwYMGDBgpmgXd//23FrrA0DpElJSUmkgOAMmTJkyZMmTjNVrsj//cUKqq7gXd//23FCqq7oFyR//29X+dGjRo0aH5ECBAgRp6enp6d8qFChQoUBm7//29wD5RR5iSyy4885wmGG4H0hnN//33F3lFF4GJLL5zz5CYY5V5nnN//33MdPkRR4iSyy4885wmGG3H0jzm7//39xXT3PkRRiSyy4885wmGFua5Llc3//47mKAAFdYAAVhWAA3LmSP//493MzFVVJFVV6zN3f/7P7+/sB/+fh1wH/8fnlAf/3+/EZ//Xz7wH/7effAf/3++28B/9/xxwH/4fPLAf//3fkB//XrxQH//339Af/38+8B//v59QH/+fXhAf/16cEB//5QH/+/XlAf/9+/EB//237+YEJHR0dAf/T7akB/7HV/wH36b0HAbfluQcBs1tj/QEHJSUlAS9PWd8Bs+W5BwH3W2X/AbdbY/sBL1NZ3wADVV4Abf7+/sB9//4wH/7ff3Af/z++sBBUFBQQH/9fHtAf/7+fcB//239/QEJISEhAfNbZf8BL8mnB9/z6b0HAbP9/f2D/6vn/zUv39/fAfP//38B//nz3QH/9ee/Af/79eEB/53XNwH/SZ3/av/7/fkB//v14wEHKysrQP/39fEj/+vl3QH//fnvL//27/fcB/9/xxQX/9eGVAf+3vf8BA4GBgQH/wfW1EwsBAQEB/3HlUwH/O8n/Av/9/fsO//n39QH/6b0HAf9bZf8W/+Xd0wH/6ePZD//z57sY/9nvvQgDAQEBAQcBAQEHBQEBAQMJAQEBAQAA5K//5wU=".replace(/(.)\1([0-9])/g,(_,a,b)=>a.repeat(b)))].map(A=>A.charCodeAt()),q=f.splice(559),x=415,B=0,V={},w=0,e=1,c="";;for(;x--;)V[B+=q.pop()||827]=`background-color:rgba(${q.pop()},${q.pop()},${q.pop()},${q.pop()/255})`;for(;A--;B>>=1)w++%8||(B=f.pop()),e=e<<1|1&B,V[e]&&(c+=(++x%36?"":"\n")+"%c　",q.push(V[e]),e=1);console.log(c,...q)