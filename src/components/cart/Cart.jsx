import React, { useState } from 'react'
import Navbar from '../Navbar/Navbar';
import Cartitem from '../CartItems/Cartitem'; 
import './Cart.css'
function Cart() {
    const [cartItems, setCartItems] = useState([
        { id: 1, name: "Samsung Galaxy S8", price: 399.99, count: 2 ,img:"data:image/jpeg;base64,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"},
        { id: 2, name: "Google Pixel latest ver", price: 499.99, count: 1 ,img:"data:image/jpeg;base64,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"},
        { id: 3, name: "Xioami Redmi Note 2", price: 699.99, count: 1 , img:"data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBwoNCggNDQgKCA0ICg0JCAgJCBAICwcNIBEiIiAdHx8kKCgsJCYxJx8VLTUtMSssOjo6Fx8/RDY4QzQ5OjcBCgoKDg0OGhAQDi4lFSUrNzcsListLTctLjc3Nzc3KystLSs3KystNzcrLS0tKy0rKysrLSs3LTcrKystLisrK//AABEIANQAoAMBEQACEQEDEQH/xAAbAAABBQEBAAAAAAAAAAAAAAAAAQIDBAcFBv/EAFUQAAEDAgIEBggQCgoDAQAAAAEAAgMEEQUhBhIxQRNRU2FxsRQiMnOBkZOhBxUkJTM0UlRVcoKSo7PR0hYjJjZCYnSV8PFDRWNkg4WktMHhNWWUF//EABkBAQADAQEAAAAAAAAAAAAAAAABAgMEBf/EADQRAAICAAIGCAYBBQEAAAAAAAABAhEDcQQSITEyMxQiQVFSYaHBEyOBseHwkQVCU2LRcv/aAAwDAQACEQMRAD8A3FACAEAIAQAgBACAEAIAQAgBACAEAIAQAgBACA8/pBpRBRSsgbDJXVUkfD9iQkRiCK9tZ7jk0XyG87gbFAeek04xS5thmHAbg7EJi5viYgIzp7ig/qzDv3hN9xARn0QsTH9VYf8AvGX7iAYfRHxL4JoD/mUv3EBGfRLxL4Hof3lJ9xANPonYl8DUR/zKT7iArVHos4hG5oOB0biW6x1cTkGqL/EU0CMei9iHwBSfvV/3EoC//ruIfANH+9X/AHEoCs9F2vuNbAaUtv2wZij9a3zEoHpdHvRAp8Q12spnUtRCwyzUM513tjvbWa4ZOGy9rWvsVoRUtnac+NiTw1raqcfsdv09dyI860+EvEc3TZeEPTx3Ijzp8JeIdNl4Q9PHckPmlPhLxDpsvCHp47kR80p8Fd46bLwh6eP5FvnT4K7yemvwitxs74Qei4T4P+wWmvtiHp46/sLbcVyCo+D/ALDprvgL9DXxzXABY5ubo3bbcYVJQcTpwceOJu39xmFfUcJX45Kc3PxOancf1YgGNHmPjPGqG5UkkQFZ70BXe/xcW9AU4jMBJwskb9Z5MbI2EcC2+8777eZCFZDIZiTaaJov2rTTmQtHTcISRjhri80bhfMCnMesOm5QHOleHySOJNibAjiCsBpI3X8KgChSQKEBd0fqHQ4vgcgNvV8dM++wxv7R3mPUoTpkTWtFp7mmbIG2uOIkLrPFRXra6mpw0zVDIdYXa03LyOjaquaW80hgzxNsY2vQKKtpqhrjBURz6nsgYe2i6QpUlLcRPDnB9aNFiykqFkFAoIoCFILFIS2oonD9N5jd+sCFSW2LNsLq4sWsjPy3WrcbbratsZxF1yL/ANMscOGu61qPSxJ6kb1bEdSOP9M3P9Qrfor8foY9KXg9SF9C7l2+TKlaI/H6EdKXg9SB1A7l2+TKnob8fp+R0teD1IXYe7l2+TKnoT8fp+R0teD1I3Yc7l2+TKdCfj9PyR0xeD1IZ6BwY89kNBtYHgjtKstBfj9PyR01eD1Oe3CXe+Wmw5I9sp6A/wDL6fkdNXg9fwOGEu98N8kU6A/8vp+R01eD1D0qd74b5Ip0F+P0/I6avB6lilwCeXU1KimaJJDCx1ROyma54bfebgWG23Ftus5aJq75+jLrSdbdD1RAKN9Pi2EQvkjkdHitFruheJY78KNhG1YYuHqNLWu1fd2m0J66fVqrXf2GzssXHcNY3PhWx5CV7DHqvF5KuolcZXMfJJJI8AXfkbBo6Mh/BXLd7We1SiqW5FTR/FquPSPDWxklpqGUdQ1pBEzHDMG2Rt/G1IummimLFSw2n3G1kZnmNguo8hCISBQCFCCeH2fD+/DqKrLczXD5kMzPY3euWPDixbEfrlGjLrvI7tJfU+p0KKFs08cRkfEZjwcTmRCYa9ic8xYZHjXZJuKveccEpOnKim192tNrazWut7nJa0Z3Y5lO90FXN3MdJwcZcds0jngao6AQT0jjUOaUku8lRbi5diIhHHqSSPleI43RR3poxJI6RwJt21hkAb+a6tbulHb5+X/Qkqty2ElXhxifLC6Uunjp3VYDIx2NLEATtJ1g4tBOy27nVY4msrUerdef8EvDrY5dar8qOPUuvqDbc65PNuXQkYtkIOzeASWi+TVJFDuPO11BIh2DLZ+l7oJZKGPaw3uxpuLHWYCXDiVSUUyAMTwMAAAYhRWAFgPxy83TeYsvc79F5cs39jYoztPE428ag89bjONLPQ0mqKqWfD6qOEVEhllpJyWiKQnPVI41jLD27Dvw9LVVib12nW0J0GGHvbUVEsdRURhwgjhB4KmcRm65zLv+1MMOnbKY2kqUdWHbvZ7JanICAEAhQhk8Ps+H9+HUVEuFmuHzIZmbsd67Y+OLFcQ+uVdF43kd2lP5azOxg59cMP3/AI/d3ty7ZrqM4cN9eP73nPo4nyCBjbAuja4vcLsp2ht3OdzAZ/zC0m0rb/fIzgnKkv3zLLXB8WJ6kUzIYaGCKjZLG4PZF2a0lzsu6cbud4OJVapxve27/h+i3I0UrjKuFJV/Pv2lQSs1ZGSQcJFIY3mOGfsV7ZGg5gm+25v5rK7i7tS2/wAmSmtzja/jcSVOIOlfJK+IGolhdSGdkhbDFAcsme6AJaDfwXULD1dil1d/nefcXeLe1x626/LI47xrOdutkOhbow1huqcvNdTZaw1T07Bf3KiwmNPi3kqGWQ0kgggkEHWB3tN1DJRSJ9dME58Qoz4eGXm6bzFl7nfovLlm/sbBCe1Pxj1qDz0PyuNYPcwhwkEV+Etbcs8XX1OpvNsB4ev8zd6X5iMaWgjWLwHEMe43e5t8r86tBS1VrcXaVxHDWepw9gqsUBACAQoQyeH2fD+/DqKiXCzTD5kMzMoz69aRDixTED9KFGi8x5HZpnLWZ2KCR7KiCVsD5+xpOEdGwHthYjbu2rukk4ta1WcEJNSTUboighqo7BjKmN8bRG50YfG5wHR4FZuL30USmnsiydlRXuZXM1q6cSxsp5bzySCkcJQ43Ge0AttzqrjC09i/jbsLrExKktr7MtpzpYXscWvjfG5tgY3sLHMy4lqmmrRi7Wx7GQyDtTxmwFss1ZCysGcw4layti6hyyHbDWHRdLJsC3m8JCglMaQM8r9agumQub4ftQsmUHD11wMceIUX1y8zTONZe56OibYPP2Nfg7k8zndaHnkiAEAIAQAgGnehBYh9nw/vw6lWXCzTD5kMzLoT6/6SDixKvP0oTReY8jr05/KWZ2YKiWPX1JDHwjQySwB1m3Xe4qW88tYko3Ut5IK2oDnu4U3k1uEOoDrAgA9Q8SPDi1whY07vWCKvqWOmLZtUzycJONQFsr7bVLw4urjuIWNNW1LfvKtQ98jy9513uaxhda2sALBXSUVS3FXNydveVZmnIZe6N9isirYws+wFSRYBnMM8yONRZNianSUslMY9g58ui6WXTIXNUF0zmSj13wL9vovrl5umcayPU0J9R5+xr0Hcn4zutDz2SIAQAgBACAaUIZPB7PQd+HUqy4WaYfMhmZXCfyi0kH/sK/60KdE5jyOrT38pZr7M7IXopHjNjgMjlsNtuako2Gr/ADViNYQs2fahFkLmXJy8yEWJwfNa+3jshKYanMhaxCzblzX3KCUyJ7dvPv8AcqC6ZC9u3LZsy7pQXTOPUi2MYBz11Efp15+mcayPW0F/Lefsa5D3J+M7rQ4R6AVACARACAQoQTwez4f34dRVXws0w+ZDMyiA/lLpMP7/AF31oU6HzHkdP9RfylmvszvNXonhtkgapKNjtX+akq2Dm/YpI1hgjFxcEgHMA2LgobCfeIIj/wAEhLJsXg+bpUE2Mezblt41FlkyF8e3zqWy6ZC9u3K3MFU0TODXi2M4B+20R+nXBpfGsvc9jQOW8/Y1mA9r8p3WhwskQkEAIAQAhAhQgmg9nw/vw6iolws1w+ZDMyem/OjSgf32uP0oTQ+Y8jo/qXIX/pfZnpGN2ZL0jwmTMYhVkoj5tqWUYpj2ZW5ksqxpi5ulRYse2C4vx7VDZdIHwW4jfzKNYtRA6PbkpsWQvYllkyvIzbklmiZ5vFRbGsA/a6P69efpXGsvc9nQOVLP2NXg7n5R61JxkiAEAIAQAgGlCGTwez0Hfh1FRLhZrh8yGZk1F+dmlI/vdd9a1ND5jyOj+pclZr7M9XG3YvRs8SizHHzKGyNUssi5tqhsag7gkso4AYebYoshxYCE7mnLabZKGyFF9gOgkIPauy32sFFovqzf9pWfFty6VaylEMkezLjud7ks0RF2NcXz6FVyo2hC1Z5TSBmrj2jo46miP+oXDpLuSyPZ0BVhvP2NPg7k/Gd1q6OFkl0AXQBdAF0AXQDSpIZYp/bFB38dRVZcLNMPmQzMmoPzu0q/aq761qaJzHkdX9R5SzX2Z7CFq72zx0i9EzYqtllEtsYqNltQlbFzKGyNQfwfMoshxBpc29jfLIc6NJkJuJFK552nwDINUpJFXOT3lV7P+1azKiNtMXmwytmSc9UKHKjSEHJ0hX0TG2dwjzqjMA2zWfxGzrWCo7dY8HpQLaQaO/tFGR/9C5sfiWXuejoXLln7GmQHtflO61ocA9SAUAEAKQCgCEqSGT059UUHfx1FVlws0w+ZDMybDvzx0r/aa0/StUaJzHkdenr5SzX2Z7WAbF3tnlpHRgbzLNs1SLsbNio2WonaxVbIodqKLIcRro1KZRwIXs2qyZm4EL4+ZLI+GQOaRextuRuyUq3EEr8jtPUoovew8FpSfX/R3v1H/uFzY/Ej09CfypZ+xpcHc+E9a1OFEqAEAIAQAgGkoQT03s9B38dRVZcLNMLmQzMowwX0y0r5qiuP0rVGi8byO3TeUsz3NMy9l2tnnRR1qemdlksXNG6gy4yF3EVRyRLgyVrDxI2RqjwxVsnUEcxEyrgQvYrJlXAgezap1iuoV3hvFdCKRUmLPcg9OxTtFRX9p4DSw30g0cyA/HUYsNnthc2Mussvc9DRH8uWfsaVB3PhPWtjziRCQQgEJBCAQDShBYpvbFB34dSrLheRrhcyGZlOEH8tNLMr/j6761qro3G8jt0zlLM9/SFuWS6pWcEWjqwEbiVkzZM6ETtmd1m0bJkoaCosmrHhgSydUa5gSw4kT2DjUpkOBXki25qUyrgUp49qumZOBzqgbVdGTTPA6VfnBo536j/3C58fiWXudmhqsKWfsaVB3PhPWtDgJEAIAQAgBAIUIJ6X2xQd/HUqy4WaYXMhmZbgLNbTfS0f2lcfpmrPBdS+h6ePHWhXmaHBBsXQ5nH8I6UEOzJUcy6wi9FHsWTkaLDLDGKrZdRJA1LLpDXAcaJhohe0casmRSIJG86smQ0Up27VdMzcTm1DdqumZSiZ7paPyh0c77R/7hYY/Ev3tOjR1UH9fsaTB3PhPWtDyyRACAEAiAVANJUkE9L7YoO/DqKrLhZphcyGZluBSBum+lpO+SuA3Z8M1ZYKuX0PUxXUfqaHBUty7bwFauJzqR1KeoYbZjPnVWjRSRcbMPdDxqtE6yJWTN90PGjiFJFbE8WipWCWUPNOGuM9TGOE7EO7WG3VOy+42vtuEcNt0t4c0lfYNwzFoKyITQsl4FzWmOeVnBCZ28DjtsJ2X3mymUHF095EZxkrW4nc4c3TdEidhDIeceNShZTndzjxhWQOdUytzzC0SKOjPdLHA6Q6OWN/xtGP9QsMddZfvaa4PC/3sNJg7n5R61qeQSKACAVAIgBANKkFikPqig7+OoqsuFmmFzIZmPxve3TDSksLQTVVoJeQBq8I1RoqubvuPQ0ttYarvPXUtRPysQttBkALV2uETzdeR1KaqdcNdURa25plBLlVwRZSmdKnqwQ53DxtDQdZz5ANXJUcUXTk+4fTYxTvmihY+pn4Rhe+uhpT2DTjcHPNhfxrOSr+00jt/uHaSuaMLxUdktDpKR0QeHgtYHkNv51EXUk9XtLONprW2kOjDo/SrDmOmEjqSN9BIYyLOdFIWee1/CrNtybGqkkidlXG+ZzOxZjEB2teJRwRdv8A4zUtNLiV9xC1b4SKVzC5zRHUBoaTw/Ct4Nx6/MpSYcV2FCfU5e1zYa0qukRqnJlqIXuc2PEIJXNNnMZVNL2noVkkHCS2nkcav6e4Bc61qqkzvf8Ap1x6Uqmsvc6tHXUf72GqU57X5R61c8okQAgBACAEA0oCek9sUHfx1FRLhZphcyGZjkjraW6VGxd6rrcgAT3YVNGdTeR6Gl8tZnZZVYg4hsGH0zf7SrlLjb4rdnjXW5s4Eo5noKKmqXRATVUdO8m5NBABlxdtdZuZZRO3QRajc53VByIknjbK9vUqudmkYv8AUSV9LT1TGx1FLFWMa/hGsmYTHrW4gQD51Cos03mNbh9M2CGHsSndFRNcaWn4AGOn6FNomn27S/QRQsjZqwMi1m6x1GNaL32KspNmkIquESWmiz1cttm3NmnmUrEfaS4LsOTVUDM3EBx2cI64LR0rVYhRxZz56a17xnPMk3drK6kiNpzZaCn1i4U8QcTfWbGGFTZNs8zjI9fNH8y61TSW1jr6o4dcWku5rL3N8Lhf72Gp0/c/KPWtDx0WY4mloLpuDvrZCIy6oG/JVbafCaqCcbc6+l7gnpywElwNpXQkNGWQvfzpGVkzw3BbZdtESsZCoBEA0oCejPqmh7+OoqJcLNMLmQzMaqHBulmlJJt6trBc98CzwON5HoaVwLM9HT1oAFsgt2jgOhBXbM1FFkzow1vPZVoupF+GsyGaho0THirGYJ2n5wU0FIf2WALA5DZ+qootrEclbzqUi2sUZ64i9nEXve36QWiRRzPP1EDOEL46qan1jfgo5CI2uvuGduhXTI1h0k1gO3c4i93ufcvSxZ5vE362NYAb3tV0g+mXLpHEv3tOnB4H+9hq0Hc/KPWtDx0TBzrWuB2r27M7HaqtF1NpVn6jpZXvFjq92ZMhY3It/wAIopEyxHLf32RqxQEAIBCUBNRn1TQ9/HUVEuFmmFzIZmK4o62lOlBva1fWXPENcLLA4/oejpXL+p2BFNGyN74XxslsI3vt2xtv4r7lvdnE4tFiKpAtsRohF6GqGSUSi3HVbO2VSyZNFO5x7WN773I1GF2sBt8SlslbxxmlAJMUgAGsXGMgNamwnaQvrOe6mhZRnqdufgV0yjZTlndxX6LFTZNkbWzPa5zIJHtBLXOYARrAXPTYbbXVXJIuk2uE4srtbF8BO29bSWI2W4Zc+O+sv3tOnA4H+9hr0Hc/KPWtTyUSXQBdAF0AXQBdANKEE9H7Zoe/jqKrLhZrg8yGZhmkszY9I9J3ODiHYlVx2Zmc3LHDmoSt9x6mLBzjS7yzVaWyTwRQyaxZEWOJZAGulIGV8938cS0WLBO9pi8HFarYQMxuEbpvBGFPxo+ZTo2J5FqPSGnFu1qPBEPtT40fMjo2J5FhmktL7mp8EQ+1R8WPmStGxPIsxaXxM1dQ1Eeo1zARStu1pOe/ejxIeZKwMVbpIe/TMODmulqnCRgjcDA3tmgJ8SHhYeDi+JFV2kNOf0ajwxD7VKxo+ZHR5+RG7HKc7p/Jj7VPxok9Gn5EZxaE7pfJhPjR8yejz8iSDSDg2hrWawa98jTJCXOa4jp5gQqucG72l44eJFVsKNNM1+J4EW6wDK+jj7cZ+yLOclJpr92l8ODhFp/uw2aIjVObe6O8ca6DyB9x7pvjCANYcY8YQBrDjHjCAARxg9BugBAIUIJ6L2zQ9/HUVWXCzXB5kMzBNM/zg0lyt67VJ865T2Tkg+dASxM1nBt7XBNyobpWaYUHiT1VKhRvHEbKbM2qdDxuQD2i7gOO+dr7lDdKy0I68lHv/wCX/PcOLbEjiscxY7ETtWJx1JauXqr+j7xQpKjgUA4i1s9rQ7LYoTJlHVrzV/yCsQWMM/8AJYKNpOKUgA/xERD3PI2hlPkcx3R/Q5110eImKYLXzvbc1g1nKKJsXgNnbAcxHcpQsOA5x81SLHxR6pdmDcAZCyENj0IAoCaiHqmi78D5iolws0wuZDMzP0YND6yDFKrE6emkqqTEhG+qNOwyuw+oAsbtGdnWBvx32ZX5D2TNOyot8jQRtBuCgHdlw8ozxoBwq4eWZ40A8VkPLM8aAcK2DlmfPQCisg5Znz0A4VsHLR/PCAeKyDl4/nhAKKuDlo/nhCKFFXDy0ZvuDwpJPU6F4PJJXUlZM0U1PQvdNTip/EvxCoAs3VBsbNJuXbMhxq0I213GGkYyw4Ndr3GpRSx6o/HRHnMoXUeRaHcLHy0XlQlDWQcLHy0XlQlE2g4VnLReWCURaDhY+Wi8qEomw4VnLReValCwMjOVjH+IFAs6mCU4fIyYuGqwO4Fv6TyRtWWJJVSOzRcF62u/od59NE7uow742awPRKr8Ew9xucPpXHjNO0lAN9IMN+DaXyDUAnpBhnwbS+QagD8H8M+DaXyDUAfg/hnwZS+QagD8H8M+DKXyDUAfg9hnwbS+QagD8HsM+DaXyDUAn4PYZ8GUvkGoBwwHDRsw2lHOIG3QEjMKo2kkUkIJyLjGCShFInFHB72i8k1SKQdiQe94vJNQUg7Eg97xeSagpB2JB73i8k1BSDsSD3vF5JqgUg7Fg97xeTagpCimi5GMdDAlikOETBsY0dAQUiRCQQAgBACAEAIAQAgBACAEAIAQAgBACAEAIAQH/9k="},
        { id: 4, name: "Samsung Galaxy S7", price: 599.99, count: 1 ,img:"data:image/jpeg;base64,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"},
      ]);
      
  return (
    <>
    <Navbar cartItems={cartItems} setCartItems={setCartItems}/>
    <Cartitem cartItems={cartItems} setCartItems={setCartItems}/>
    </>
  )
}

export default Cart