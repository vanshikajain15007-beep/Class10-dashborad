// ==========================================
// THE QUEST ENGINE (Data & Notes Vault)
// ==========================================

const questDatabase = {
    // ------------------------------------------
    // SCIENCE
    // ------------------------------------------
    "Science-Physics-LightReflectionRefraction": [
        { q: "What is the speed of light in a vacuum?", opts: ["3 x 10^8 m/s", "3 x 10^5 km/s", "Both A and B", "None of these"], ans: 2, exp: "3 x 10^8 m/s is exactly 300,000,000 m/s. When converted to kilometers, it becomes 300,000 km/s (or 3 x 10^5 km/s). Both units represent the exact same speed!" },
        { q: "The mirror used by dentists to examine teeth is:", opts: ["Convex", "Concave", "Plane", "Cylindrical"], ans: 1, exp: "Dentists use Concave mirrors because when an object (the tooth) is placed close to it, it produces a magnified, erect, and virtual image." },
        { q: "If the magnification produced by a lens is -1, the image is:", opts: ["Real and inverted", "Virtual and erect", "Real and magnified", "Virtual and diminished"], ans: 0, exp: "The negative (-) sign indicates that the image is formed below the principal axis, meaning it is real and inverted. The '1' means it is the exact same size as the object." },
        { q: "According to Snell's law, the ratio of sin(i) to sin(r) is a constant called:", opts: ["Refractive index", "Optical density", "Focal length", "Magnification"], ans: 0, exp: "Snell's Law specifically states that the ratio of the sine of the angle of incidence to the sine of the angle of refraction is a constant, mathematically defined as the Refractive Index." },
        { q: "A convex lens is also known as a:", opts: ["Diverging lens", "Converging lens", "Plane lens", "Bifocal lens"], ans: 1, exp: "A convex lens is thicker at the center and converges parallel rays of light to a single point (the principal focus), which is why it is called a converging lens." },
        { q: "The power of a lens is defined as the reciprocal of its:", opts: ["Radius of curvature", "Focal length in meters", "Magnification", "Object distance"], ans: 1, exp: "Power (P) = 1 / f. However, to calculate the power in Dioptres (D), the focal length (f) MUST be measured in meters." },
        { q: "Where should an object be placed in front of a convex lens to get a real image of the size of the object?", opts: ["At the principal focus", "At twice the focal length (2F)", "At infinity", "Between optical center and focus"], ans: 1, exp: "When an object is placed exactly at 2F1, the convex lens forms a real, inverted image at 2F2 on the opposite side, which is identical in size to the object." },
        { q: "The absolute refractive index of any medium is always:", opts: ["Less than 1", "Equal to 1", "Greater than 1", "Zero"], ans: 2, exp: "Absolute refractive index = (Speed of light in vacuum) / (Speed of light in medium). Since nothing travels faster than light in a vacuum, the numerator is always larger, making the answer always > 1." }
    ],

    // ------------------------------------------
    // MATHEMATICS - ALGEBRA & NUMBERS (FIXED SPACES)
    // ------------------------------------------
    "Mathematics-Algebra & Numbers-RealNumbers": [
        { q: "For any two positive integers a and b, HCF(a,b) × LCM(a,b) is equal to:", opts: ["a + b", "a - b", "a × b", "a / b"], ans: 2, exp: "The product of the HCF and LCM of two numbers is always equal to the product of the numbers themselves (a × b)." },
        { q: "If p is a prime number and p divides a², then p also divides:", opts: ["a", "2a", "a/2", "a³"], ans: 0, exp: "According to the Fundamental Theorem of Arithmetic, if a prime number divides the square of a number, it must also divide the base number (a)." },
        { q: "The decimal expansion of the rational number 14587/1250 will terminate after:", opts: ["1 decimal place", "2 decimal places", "3 decimal places", "4 decimal places"], ans: 3, exp: "1250 = 2¹ × 5⁴. The highest power of 2 or 5 in the denominator is 4, so it terminates after 4 decimal places." },
        { q: "Which of the following is an irrational number?", opts: ["22/7", "3.1416", "√4", "2 + √3"], ans: 3, exp: "The sum of a rational number (2) and an irrational number (√3) is always an irrational number." },
        { q: "What is the HCF of two consecutive even numbers?", opts: ["1", "2", "4", "Cannot be determined"], ans: 1, exp: "Consecutive even numbers (like 2 and 4, or 10 and 12) only share 2 as their highest common factor." },
        { q: "If the LCM of a and 18 is 36, and the HCF of a and 18 is 2, what is a?", opts: ["2", "3", "4", "1"], ans: 2, exp: "Use the formula: a × 18 = 36 × 2. So, 18a = 72, which means a = 4." },
        { q: "Every positive even integer is of the form:", opts: ["2q", "2q + 1", "q", "q + 1"], ans: 0, exp: "An even number is always divisible by 2, so it can be represented as 2q for some integer q." },
        { q: "√2 is an irrational number. This statement can be proven using:", opts: ["Direct proof", "Proof by contradiction", "Mathematical induction", "Euclid's Division Lemma"], ans: 1, exp: "We prove √2 is irrational by initially assuming it IS rational (p/q), and then finding a contradiction." }
    ],
    
    "Mathematics-Algebra & Numbers-Polynomials": [
        { q: "A polynomial of degree 2 is called a:", opts: ["Linear polynomial", "Quadratic polynomial", "Cubic polynomial", "Biquadratic polynomial"], ans: 1, exp: "A polynomial with the highest power of 2 is called a quadratic polynomial." },
        { q: "If α and β are the zeroes of the quadratic polynomial ax² + bx + c, then α + β equals:", opts: ["c/a", "-c/a", "b/a", "-b/a"], ans: 3, exp: "The sum of the zeroes of a quadratic polynomial is always equal to -b/a." },
        { q: "A polynomial can have at most how many zeroes?", opts: ["Infinite", "Degree of the polynomial", "Two", "One"], ans: 1, exp: "The Fundamental Theorem of Algebra states that a polynomial of degree 'n' can have at most 'n' real zeroes." },
        { q: "What is a quadratic polynomial whose zeroes are 3 and -4?", opts: ["x² - x - 12", "x² + x - 12", "x² - x + 12", "x² + x + 12"], ans: 1, exp: "Sum of zeroes = -1. Product = -12. Formula is x² - (Sum)x + (Product) = x² - (-1)x - 12 = x² + x - 12." },
        { q: "The graph of a quadratic polynomial is a:", opts: ["Straight line", "Circle", "Parabola", "Ellipse"], ans: 2, exp: "Quadratic equations (y = ax² + bx + c) always form a U-shaped curve called a parabola when graphed." },
        { q: "If one zero of 2x² - 3x + k is reciprocal to the other, then the value of k is:", opts: ["2", "-2", "3", "-3"], ans: 0, exp: "If zeroes are α and 1/α, their product is 1. Product of zeroes = c/a, so k/2 = 1. Therefore, k = 2." },
        { q: "Which of the following is not a polynomial?", opts: ["x² + 2x + 1", "x³ - 3x", "1/x + 2", "√2x² + 5"], ans: 2, exp: "1/x means x has a negative exponent (x⁻¹). Polynomials cannot have negative or fractional exponents for variables." },
        { q: "If the sum of zeroes of quadratic polynomial 3x² - kx + 6 is 3, find k.", opts: ["3", "6", "9", "-9"], ans: 2, exp: "Sum of zeroes = -(-k)/3 = k/3. Since sum is given as 3, k/3 = 3, so k = 9." }
    ],

    "Mathematics-Algebra & Numbers-PairofLinearEquations": [
        { q: "If a₁/a₂ ≠ b₁/b₂, the pair of linear equations has:", opts: ["No solution", "Infinitely many solutions", "A unique solution", "Two solutions"], ans: 2, exp: "This is the condition for intersecting lines, which means they cross at exactly one point (unique solution)." },
        { q: "Lines represented by 2x + 3y = 9 and 4x + 6y = 18 are:", opts: ["Intersecting", "Parallel", "Coincident", "Perpendicular"], ans: 2, exp: "a₁/a₂ = 2/4 (1/2), b₁/b₂ = 3/6 (1/2), c₁/c₂ = -9/-18 (1/2). Since all ratios are equal, the lines overlap entirely (coincident)." },
        { q: "A system of equations that has no solution is called:", opts: ["Consistent", "Inconsistent", "Dependent", "Independent"], ans: 1, exp: "Parallel lines never meet, so they have no solution, making the system mathematically 'inconsistent'." },
        { q: "Find the value of k for which x - 2y = 3 and 3x + ky = 1 have a unique solution.", opts: ["k = -6", "k ≠ -6", "k = 0", "k ≠ 0"], ans: 1, exp: "For unique solution: a₁/a₂ ≠ b₁/b₂. So, 1/3 ≠ -2/k, which means k ≠ -6." },
        { q: "The sum of two numbers is 35 and their difference is 13. What is the larger number?", opts: ["24", "22", "26", "28"], ans: 0, exp: "x + y = 35 and x - y = 13. Adding them gives 2x = 48, so x = 24." },
        { q: "Graphically, the pair of equations x = a and y = b represents lines which are:", opts: ["Parallel", "Intersecting at (b, a)", "Coincident", "Intersecting at (a, b)"], ans: 3, exp: "x = a is a vertical line and y = b is a horizontal line. They intersect exactly at the point (a, b)." },
        { q: "Five years ago, A was thrice as old as B. Ten years later, A will be twice as old as B. What are the equations?", opts: ["x - 3y = -10, x - 2y = 10", "x + 3y = 10, x + 2y = 10", "x - 3y = 10, x - 2y = -10", "x - 3y = 0, x - 2y = 0"], ans: 0, exp: "(x-5) = 3(y-5) simplifies to x - 3y = -10. (x+10) = 2(y+10) simplifies to x - 2y = 10." },
        { q: "In substitution method, we:", opts: ["Add equations to eliminate a variable", "Multiply equations to make coefficients equal", "Express one variable in terms of the other", "Draw graphs to find the intersection"], ans: 2, exp: "Substitution involves taking an equation, isolating one variable (like x = 2y + 3), and plugging it into the other equation." }
    ],

    "Mathematics-Algebra & Numbers-QuadraticEquations": [
        { q: "The standard form of a quadratic equation is:", opts: ["ax + b = 0", "ax² + bx + c = 0", "ax³ + bx² + cx = 0", "ax² + bx = c"], ans: 1, exp: "A quadratic equation must have a squared term as its highest power, formatted as ax² + bx + c = 0 where a ≠ 0." },
        { q: "The discriminant of the quadratic equation ax² + bx + c = 0 is:", opts: ["b² - 4ac", "b² + 4ac", "4ac - b²", "√b² - 4ac"], ans: 0, exp: "The discriminant (D) determines the nature of the roots and is calculated as b² - 4ac." },
        { q: "If the discriminant is equal to zero, the roots are:", opts: ["Real and distinct", "No real roots", "Real and equal", "Rational and unequal"], ans: 2, exp: "If b² - 4ac = 0, the quadratic formula yields a single, repeated real root (Real and equal)." },
        { q: "Find the discriminant of 2x² - 4x + 3 = 0.", opts: ["-8", "8", "-4", "16"], ans: 0, exp: "b² - 4ac = (-4)² - 4(2)(3) = 16 - 24 = -8." },
        { q: "If x² - kx + 4 = 0 has equal roots, then the value of k is:", opts: ["±2", "±4", "±8", "16"], ans: 1, exp: "For equal roots, D = 0. So (-k)² - 4(1)(4) = 0. k² = 16, which means k = ±4." },
        { q: "Which of the following is NOT a method to solve quadratic equations?", opts: ["Factorisation", "Completing the square", "Quadratic Formula", "Cross-multiplication"], ans: 3, exp: "Cross-multiplication is a method used for solving pairs of linear equations, not quadratic equations." },
        { q: "The roots of the equation x² - 9 = 0 are:", opts: ["3, -3", "3, 3", "-3, -3", "9, -9"], ans: 0, exp: "x² = 9. Taking the square root of both sides gives x = 3 and x = -3." },
        { q: "A train travels 360 km at a uniform speed. If speed was 5 km/h more, it would take 1 hour less. What is the equation?", opts: ["360/x - 360/(x+5) = 1", "360/(x+5) - 360/x = 1", "360x = x + 5", "x(x+5) = 360"], ans: 0, exp: "Time = Distance/Speed. The original time (360/x) minus the faster time (360/(x+5)) equals the difference of 1 hour." }
    ],

    "Mathematics-Algebra & Numbers-ArithmeticProgressions": [
        { q: "The nth term of an AP is given by the formula:", opts: ["a + (n+1)d", "a + (n-1)d", "a + nd", "a - (n-1)d"], ans: 1, exp: "To find any term in an AP, you take the first term (a) and add the common difference (d) multiplied by (n-1)." },
        { q: "If the common difference of an AP is 5, then a₁₈ - a₁₃ is:", opts: ["5", "20", "25", "30"], ans: 2, exp: "a₁₈ - a₁₃ = [a + 17d] - [a + 12d] = 5d. Since d=5, 5(5) = 25." },
        { q: "The sum of the first n terms of an AP is:", opts: ["n/2 [2a + (n-1)d]", "n/2 [a + l]", "Both A and B", "None of these"], ans: 2, exp: "Both formulas are correct! The first uses 'd', and the second is a shortcut if you already know the last term 'l'." },
        { q: "What is the 10th term of the AP: 2, 7, 12, ...?", opts: ["47", "52", "42", "57"], ans: 0, exp: "a = 2, d = 5. a₁₀ = a + 9d = 2 + 9(5) = 2 + 45 = 47." },
        { q: "The sum of the first 100 positive integers is:", opts: ["5050", "5000", "5150", "5100"], ans: 0, exp: "Using n(n+1)/2, we get 100(101)/2 = 50 × 101 = 5050." },
        { q: "If 2x, x+10, 3x+2 are in AP, the value of x is:", opts: ["4", "5", "6", "7"], ans: 2, exp: "For three terms in AP, 2(middle) = first + last. 2(x+10) = 2x + (3x+2). 2x + 20 = 5x + 2. 3x = 18, so x = 6." },
        { q: "Is 301 a term of the AP: 5, 11, 17, 23, ...?", opts: ["Yes", "No", "Cannot be determined", "It is the 50th term"], ans: 1, exp: "a=5, d=6. 301 = 5 + (n-1)6. 296/6 = n-1. Since 296 is not divisible by 6, 'n' is a fraction. 'n' must be an integer, so 301 is not in the AP." },
        { q: "The list of numbers -10, -6, -2, 2, ... is:", opts: ["An AP with d = -4", "An AP with d = 4", "An AP with d = 8", "Not an AP"], ans: 1, exp: "d = a₂ - a₁ = -6 - (-10) = -6 + 10 = 4. Since the difference is constant, it is an AP with d = 4." }
    ],

    // ------------------------------------------
    // MATHEMATICS - GEOMETRY
    // ------------------------------------------
    "Mathematics-Geometry-CoordinateGeometry": [
        { q: "The distance of a point P(x, y) from the origin is:", opts: ["√(x² + y²)", "x² + y²", "x + y", "√(x² - y²)"], ans: 0, exp: "Using the distance formula from (0,0), d = √((x-0)² + (y-0)²) = √(x² + y²)." },
        { q: "The coordinates of the midpoint of the line joining (x1, y1) and (x2, y2) are:", opts: ["((x1-x2)/2, (y1-y2)/2)", "((x1+x2)/2, (y1+y2)/2)", "(x1+x2, y1+y2)", "((x1+y1)/2, (x2+y2)/2)"], ans: 1, exp: "The midpoint is literally the mathematical average of the x-coordinates and the y-coordinates." },
        { q: "What is the distance between points A(0, 5) and B(-5, 0)?", opts: ["5", "5√2", "2√5", "10"], ans: 1, exp: "d = √((-5 - 0)² + (0 - 5)²) = √(25 + 25) = √50 = 5√2." },
        { q: "If the point P(k, 0) divides the segment joining A(2, -2) and B(-7, 4) in the ratio 1:2, then k is:", opts: ["1", "2", "-1", "-2"], ans: 2, exp: "Using section formula for x: k = (1*-7 + 2*2)/(1+2) = (-7 + 4)/3 = -3/3 = -1." },
        { q: "The centroid of a triangle with vertices (x1,y1), (x2,y2), (x3,y3) is:", opts: ["((x1+x2)/3, (y1+y2)/3)", "((x1+x2+x3)/3, (y1+y2+y3)/3)", "((x1+x2+x3)/2, (y1+y2+y3)/2)", "0"], ans: 1, exp: "The centroid is the center of mass, calculated by averaging all three x-coordinates and all three y-coordinates." },
        { q: "Any point on the x-axis is of the form:", opts: ["(x, y)", "(0, y)", "(x, 0)", "(x, x)"], ans: 2, exp: "For any point sitting directly on the x-axis, its vertical height (y-coordinate) is exactly 0." },
        { q: "If points A(1,2), B(4,y), C(x,6) and D(3,5) are vertices of a parallelogram, find x and y.", opts: ["x=6, y=3", "x=3, y=6", "x=2, y=4", "x=4, y=2"], ans: 0, exp: "The diagonals of a parallelogram bisect each other, meaning their midpoints are identical. Equating midpoints gives x=6 and y=3." },
        { q: "The ratio in which the y-axis divides the line segment joining (5, -6) and (-1, -4) is:", opts: ["1:5", "5:1", "1:1", "5:6"], ans: 1, exp: "Let ratio be k:1. At y-axis, x=0. So, (k(-1) + 1(5))/(k+1) = 0. -k + 5 = 0, meaning k = 5. Ratio is 5:1." }
    ],

    "Mathematics-Geometry-Triangles": [
        { q: "Basic Proportionality Theorem (BPT) is also known as:", opts: ["Pythagoras Theorem", "Thales Theorem", "Euclid's Theorem", "Area Theorem"], ans: 1, exp: "The BPT, which states a line parallel to one side of a triangle divides the other two sides proportionally, is famously named after the Greek mathematician Thales." },
        { q: "If ∆ABC ~ ∆DEF, then corresponding angles are:", opts: ["Supplementary", "Complementary", "Equal", "Unequal"], ans: 2, exp: "By definition, for two triangles to be similar, their shapes must be identical, meaning all corresponding internal angles must be exactly equal." },
        { q: "In ∆ABC, if DE || BC, AD=1.5cm, BD=3cm, and AE=1cm, find EC.", opts: ["2 cm", "3 cm", "4 cm", "1.5 cm"], ans: 0, exp: "By BPT: AD/BD = AE/EC. So 1.5/3 = 1/EC. 1/2 = 1/EC, therefore EC = 2 cm." },
        { q: "Which of the following is NOT a criterion for similarity of triangles?", opts: ["AA", "SAS", "SSS", "RHS"], ans: 3, exp: "RHS (Right Angle-Hypotenuse-Side) is a criterion for congruence, not for similarity." },
        { q: "If the ratio of sides of two similar triangles is 4:9, the ratio of their areas is:", opts: ["4:9", "2:3", "16:81", "81:16"], ans: 2, exp: "The ratio of the areas of two similar triangles is equal to the square of the ratio of their corresponding sides (4² / 9² = 16/81)." },
        { q: "A vertical stick 20m long casts a shadow 10m long. At the same time, a tower casts a shadow 50m long. Height of tower is:", opts: ["100m", "50m", "25m", "200m"], ans: 0, exp: "Because the sun's rays are parallel, the triangles are similar. Height/Shadow = Height/Shadow. 20/10 = H/50. H = 100m." },
        { q: "If ∆ABC ~ ∆PQR, perimeter of ABC is 32cm and perimeter of PQR is 48cm. If PR = 6cm, then AC is:", opts: ["4 cm", "8 cm", "9 cm", "12 cm"], ans: 0, exp: "The ratio of perimeters equals the ratio of corresponding sides. 32/48 = AC/6. 2/3 = AC/6, meaning AC = 4cm." },
        { q: "In a right triangle, the square of the hypotenuse is equal to the sum of the squares of the other two sides. This is:", opts: ["Converse of Pythagoras", "Pythagoras Theorem", "BPT", "Converse of BPT"], ans: 1, exp: "This is the exact definition of the Pythagoras Theorem." }
    ],

    "Mathematics-Geometry-Circles": [
        { q: "A tangent to a circle intersects it in how many points?", opts: ["Zero", "One", "Two", "Infinite"], ans: 1, exp: "A tangent is a straight line that touches the circle at exactly one single point on its circumference." },
        { q: "The angle between a tangent and the radius drawn to the point of contact is:", opts: ["45°", "60°", "90°", "180°"], ans: 2, exp: "A theorem states that the tangent at any point of a circle is strictly perpendicular (90 degrees) to the radius through the point of contact." },
        { q: "How many parallel tangents can a circle have at most?", opts: ["1", "2", "3", "Infinite"], ans: 1, exp: "You can only draw two parallel tangents to a circle, located at the completely opposite ends of a single diameter." },
        { q: "If tangents PA and PB from a point P to a circle with centre O are inclined to each other at angle 80°, then ∠POA is:", opts: ["50°", "60°", "70°", "80°"], ans: 0, exp: "∠APB = 80°. The line PO bisects this angle, so ∠APO = 40°. In ∆PAO, ∠POA = 180° - (90° + 40°) = 50°." },
        { q: "The length of tangents drawn from an external point to a circle are:", opts: ["Unequal", "Equal", "Parallel", "Perpendicular"], ans: 1, exp: "This is a fundamental theorem: Tangents drawn from a single external point to a circle are exactly equal in length." },
        { q: "A circle can have how many tangents?", opts: ["1", "2", "0", "Infinitely many"], ans: 3, exp: "Because a circle consists of an infinite number of points on its circumference, you can draw a tangent at every single one of those points." },
        { q: "From a point Q, length of tangent to a circle is 24cm and distance of Q from center is 25cm. Radius is:", opts: ["7 cm", "12 cm", "15 cm", "24.5 cm"], ans: 0, exp: "This forms a right triangle where radius is the leg. r² + 24² = 25². r² + 576 = 625. r² = 49, so radius = 7cm." },
        { q: "A quadrilateral ABCD is drawn to circumscribe a circle. Which relation is true?", opts: ["AB+BC = CD+DA", "AB+CD = AD+BC", "AC+BD = AB+CD", "AB=BC=CD=DA"], ans: 1, exp: "By applying the theorem that tangents from an external point are equal, the sums of opposite sides of the circumscribing quadrilateral are equal." }
    ],

    "Mathematics-Geometry-AreasRelatedtoCircles": [
        { q: "The area of a circle with radius r is:", opts: ["2πr", "πr²", "πd", "4πr²"], ans: 1, exp: "The formula for the space enclosed inside a circle is πr²." },
        { q: "The perimeter (circumference) of a circle is:", opts: ["πr²", "2πr", "πr", "2πd"], ans: 1, exp: "The distance around the boundary of a circle is given by 2πr (or πd)." },
        { q: "The area of a sector of angle θ is:", opts: ["(θ/360) × πr²", "(θ/360) × 2πr", "(θ/180) × πr²", "(θ/360) × πr"], ans: 0, exp: "A sector is a fraction of the total area. The fraction is determined by taking the central angle θ and dividing it by 360°." },
        { q: "The length of an arc of a sector of angle θ is:", opts: ["(θ/360) × πr²", "(θ/360) × 2πr", "(θ/180) × πr²", "(θ/360) × πr"], ans: 1, exp: "An arc is a fraction of the total circumference. The fraction is (θ/360) multiplied by 2πr." },
        { q: "If the perimeter and area of a circle are numerically equal, then radius is:", opts: ["2 units", "π units", "4 units", "7 units"], ans: 0, exp: "Set 2πr = πr². Divide both sides by πr, and you are left with exactly r = 2." },
        { q: "What is the area of a quadrant of a circle of radius 14 cm?", opts: ["154 cm²", "308 cm²", "616 cm²", "77 cm²"], ans: 0, exp: "A quadrant has θ=90°, meaning it is 1/4th of a circle. Area = (1/4) * (22/7) * 14 * 14 = 154 cm²." },
        { q: "Area of the major sector of angle θ is:", opts: ["πr² - Area of minor sector", "(360-θ)/360 × πr²", "Both A and B", "None of these"], ans: 2, exp: "You can find it by subtracting the minor sector from the total circle area, or by using the reflex angle (360-θ) directly." },
        { q: "The minute hand of a clock is 14 cm long. The area swept by it in 5 minutes is:", opts: ["154/3 cm²", "154 cm²", "51.33 cm²", "Both A and C"], ans: 3, exp: "In 60 mins, it sweeps 360°. In 5 mins, it sweeps 30°. Area = (30/360) * (22/7) * 14² = 154/3 cm² (which is 51.33 cm²)." }
    ],

    "Mathematics-Geometry-SurfaceAreasandVolumes": [
        { q: "The curved surface area of a cylinder is:", opts: ["πr²h", "2πrh", "2πr(r+h)", "πrl"], ans: 1, exp: "Imagine unrolling a cylinder; it forms a rectangle. The width is the circumference (2πr) and the height is h. Area = 2πrh." },
        { q: "The volume of a cone is:", opts: ["1/3 πr²h", "πr²h", "4/3 πr³", "1/2 πr²h"], ans: 0, exp: "A cone's volume is exactly one-third of the volume of a cylinder with the same base radius and height." },
        { q: "The surface area of a sphere of radius r is:", opts: ["4/3 πr³", "2πr²", "3πr²", "4πr²"], ans: 3, exp: "The surface area of a perfect sphere is equal to exactly four times the area of a circle with the same radius." },
        { q: "If two solid hemispheres of same base radius 'r' are joined together along their bases, the total surface area of this new solid is:", opts: ["4πr²", "6πr²", "3πr²", "8πr²"], ans: 0, exp: "Joining them forms a complete sphere. The flat circular bases hide inside, leaving only the curved outer shell, which is 4πr²." },
        { q: "A metallic sphere of radius 4.2 cm is melted and recast into a cylinder of radius 6 cm. Height of cylinder is:", opts: ["2.74 cm", "3.14 cm", "4.2 cm", "2.14 cm"], ans: 0, exp: "Volume remains constant. (4/3)π(4.2)³ = π(6)²h. Solving this yields h = 2.744 cm." },
        { q: "The total surface area of a hemisphere is:", opts: ["2πr²", "3πr²", "4πr²", "πr²"], ans: 1, exp: "It includes the curved bowl part (2πr²) PLUS the flat circular top (πr²), making 3πr²." },
        { q: "Volume of a cylinder is 308 cm³ and its height is 8 cm. Find its radius.", opts: ["3.5 cm", "7 cm", "14 cm", "2.5 cm"], ans: 0, exp: "πr²h = 308. (22/7) * r² * 8 = 308. r² = (308*7)/(22*8) = 12.25. Therefore, r = 3.5 cm." },
        { q: "During conversion of a solid from one shape to another, the volume of the new shape will:", opts: ["Increase", "Decrease", "Remain unaltered", "Be doubled"], ans: 2, exp: "According to the Law of Conservation of Mass (assuming no waste), reshaping an object changes its surface area, but its physical volume remains exactly the same." }
    ],

    // ------------------------------------------
    // MATHEMATICS - TRIGONOMETRY & STATS (FIXED SPACES)
    // ------------------------------------------
    "Mathematics-Trigonometry & Stats-IntrotoTrigonometry": [
        { q: "In a right triangle, sine of angle θ is:", opts: ["Base/Hypotenuse", "Perpendicular/Base", "Perpendicular/Hypotenuse", "Hypotenuse/Perpendicular"], ans: 2, exp: "Sine is the ratio of the side Opposite (Perpendicular) to the angle over the Hypotenuse." },
        { q: "The value of sin²θ + cos²θ is always:", opts: ["0", "1", "-1", "Depends on θ"], ans: 1, exp: "This is the primary Pythagorean trigonometric identity, which holds true for absolutely any angle θ." },
        { q: "If tan A = 4/3, what is the value of sin A?", opts: ["3/5", "4/5", "3/4", "5/4"], ans: 1, exp: "tan = P/B = 4/3. Hypotenuse = √(4²+3²) = 5. sin = P/H = 4/5." },
        { q: "What is the value of tan 45°?", opts: ["0", "1/v3", "1", "Infinity"], ans: 2, exp: "In an isosceles right triangle where the angles are 45-45-90, the perpendicular and base are equal, so P/B = 1." },
        { q: "sec²θ - tan²θ equals:", opts: ["0", "1", "-1", "2"], ans: 1, exp: "This is the second fundamental Pythagorean trigonometric identity." },
        { q: "Which of the following values is impossible for cos θ?", opts: ["0.5", "1", "0", "1.5"], ans: 3, exp: "Cosine is Base/Hypotenuse. Since the hypotenuse is the longest side, the fraction can never be greater than 1." },
        { q: "The value of (sin 30° + cos 60°) is:", opts: ["1", "√3", "2", "0"], ans: 0, exp: "sin 30° is 1/2. cos 60° is 1/2. 1/2 + 1/2 = 1." },
        { q: "If sin θ = cos θ, then the value of θ (for acute angles) is:", opts: ["30°", "45°", "60°", "90°"], ans: 1, exp: "At 45°, both sine and cosine equal 1/√2 because the perpendicular and base are equal." }
    ],

    "Mathematics-Trigonometry & Stats-HeightsandDistances": [
        { q: "The angle formed by the line of sight with the horizontal when viewing an object above the horizontal level is called:", opts: ["Angle of depression", "Angle of elevation", "Right angle", "Acute angle"], ans: 1, exp: "When you look UP at something, the angle your eyes make with the flat horizon is the angle of elevation." },
        { q: "The angle formed when viewing an object below the horizontal level is:", opts: ["Angle of depression", "Angle of elevation", "Obtuse angle", "Reflex angle"], ans: 0, exp: "When you look DOWN from a height, the angle from the imaginary horizontal line dropping down to the object is the angle of depression." },
        { q: "If the height of a pole is equal to the length of its shadow, the sun's altitude is:", opts: ["30°", "45°", "60°", "90°"], ans: 1, exp: "Let height be h and shadow be x. Since h = x, tan θ = h/x = 1. Therefore, θ = 45°." },
        { q: "A ladder 15m long rests against a wall making an angle of 60° with the wall. Height of the point on the wall is:", opts: ["15√3 m", "7.5 m", "7.5√3 m", "15 m"], ans: 1, exp: "Angle with the WALL is 60°, so angle with GROUND is 30°. sin(30°) = Height/15. 1/2 = H/15, so H = 7.5m." },
        { q: "From a point on the ground 30m away from the foot of a tower, the angle of elevation to the top is 30°. The height of the tower is:", opts: ["10√3 m", "30√3 m", "10 m", "15 m"], ans: 0, exp: "tan 30° = H/30. 1/√3 = H/30. H = 30/√3, which rationalizes to 10√3 m." },
        { q: "As you move away from the base of a tall building, the angle of elevation to its top:", opts: ["Increases", "Decreases", "Remains same", "Becomes zero"], ans: 1, exp: "The further back you walk, the less you have to tilt your head up to see the top, meaning the angle decreases." },
        { q: "If the angle of elevation of a tower from a distance of 100m is 60°, its height is:", opts: ["100√3 m", "100/√3 m", "50√3 m", "200 m"], ans: 0, exp: "tan 60° = H/100. √3 = H/100, so H = 100√3." },
        { q: "The angle of elevation of the top of a building from the foot of a tower is 30° and the angle of elevation of the top of the tower from the foot of the building is 60°. If the tower is 50m high, the building's height is:", opts: ["50/3 m", "50 m", "150 m", "25 m"], ans: 0, exp: "Distance x = 50/tan(60) = 50/√3. Building height h = x * tan(30) = (50/√3) * (1/√3) = 50/3 m." }
    ],

    "Mathematics-Trigonometry & Stats-Statistics": [
        { q: "Which of the following is NOT a measure of central tendency?", opts: ["Mean", "Median", "Mode", "Range"], ans: 3, exp: "Mean, median, and mode show the 'center' of data. Range shows the 'spread' (difference between highest and lowest)." },
        { q: "The formula to find the class mark is:", opts: ["Upper limit - Lower limit", "(Upper limit + Lower limit)/2", "Upper limit / Lower limit", "Upper limit × Lower limit"], ans: 1, exp: "The class mark is the exact midpoint of a class interval." },
        { q: "The empirical relationship between mean, median, and mode is:", opts: ["3 Median = Mode + 2 Mean", "Mode = 3 Median - 2 Mean", "Both A and B", "Mean = 3 Median - Mode"], ans: 2, exp: "This is Karl Pearson's empirical formula. Both A and B are mathematically identical algebraic variations of it." },
        { q: "The cumulative frequency curve is also known as:", opts: ["Histogram", "Frequency Polygon", "Ogive", "Bar Graph"], ans: 2, exp: "An Ogive is a free-hand curve drawn by plotting cumulative frequencies against class boundaries." },
        { q: "If the mean of first n natural numbers is 15, then n is:", opts: ["29", "30", "15", "31"], ans: 0, exp: "Mean of first n natural numbers is (n+1)/2. So, (n+1)/2 = 15. n+1 = 30, meaning n = 29." },
        { q: "The mode of a grouped frequency distribution can be found graphically using a:", opts: ["Pie chart", "Ogive", "Histogram", "Frequency Polygon"], ans: 2, exp: "By drawing diagonal lines inside the tallest bar of a Histogram, the intersection point drops down to the exact Mode." },
        { q: "In a 'less than' ogive, the points are plotted against:", opts: ["Lower class limits", "Upper class limits", "Class marks", "Frequencies"], ans: 1, exp: "For a 'less than' cumulative frequency curve, we check how many items fall below the Upper Limit of the class." },
        { q: "If Mode = 80 and Mean = 110, then Median is:", opts: ["90", "100", "105", "110"], ans: 1, exp: "Mode = 3(Median) - 2(Mean). 80 = 3(Median) - 2(110). 80 = 3(Median) - 220. 300 = 3(Median). Median = 100." }
    ],

    "Mathematics-Trigonometry & Stats-Probability": [
        { q: "The probability of an impossible event is:", opts: ["1", "0", "-1", "Infinity"], ans: 1, exp: "If an event absolutely cannot happen (like rolling a 7 on a standard 6-sided die), its probability is mathematically zero." },
        { q: "The probability of a sure (certain) event is:", opts: ["0", "1", "0.5", "100"], ans: 1, exp: "If an event is guaranteed to happen, its probability is 1 (or 100%)." },
        { q: "Which of the following cannot be the probability of an event?", opts: ["2/3", "-1.5", "15%", "0.7"], ans: 1, exp: "Probability is always a value between 0 and 1. It can NEVER be a negative number." },
        { q: "For any event E, P(E) + P(not E) is equal to:", opts: ["0", "1", "2", "Cannot be determined"], ans: 1, exp: "The probability of something happening PLUS the probability of it not happening covers all possible outcomes, which equals 1 (100%)." },
        { q: "A die is thrown once. The probability of getting a prime number is:", opts: ["1/2", "1/3", "2/3", "1/6"], ans: 0, exp: "The primes on a die are 2, 3, and 5. That's 3 favorable outcomes out of 6 total. 3/6 = 1/2." },
        { q: "If P(E) = 0.05, what is the probability of 'not E'?", opts: ["0.95", "0.05", "1.05", "0.90"], ans: 0, exp: "P(not E) = 1 - P(E) = 1 - 0.05 = 0.95." },
        { q: "A card is drawn from a well-shuffled deck of 52 cards. Probability of a face card is:", opts: ["1/13", "3/13", "4/13", "12/52"], ans: 1, exp: "There are 3 face cards (Jack, Queen, King) per suit, and 4 suits. 12 face cards total. 12/52 simplifies to 3/13." },
        { q: "The probability of getting exactly two heads when tossing three coins is:", opts: ["3/8", "1/8", "1/4", "1/2"], ans: 0, exp: "Possible outcomes: HHH, HHT, HTH, HTT, THH, THT, TTH, TTT (8 total). Exactly two heads: HHT, HTH, THH (3 favorable). Probability = 3/8." }
    ]
};

// ==========================================
// SECRET NOTES VAULT (Fully Populated!)
// ==========================================
const secretNotesVault = {
    // ------------------------------------------
    // SCIENCE (Existing)
    // ------------------------------------------
    "Science-Physics-LightReflectionRefraction": `
        <div class="n-title">LIGHT: Reflection & Refraction</div>
        <div class="n-section">
            <div class="n-h3">1. Laws of Reflection</div>
            <p>• The angle of incidence is equal to the angle of reflection <span class="n-hl">∠i = ∠r</span>.</p>
            <p>• The incident ray, normal, and reflected ray all lie in the same plane.</p>
        </div>
        <div class="n-section">
            <div class="n-h3">2. Spherical Mirrors</div>
            <p>• <span class="n-hl">Concave Mirror:</span> Converging mirror. Used in torches, dentist mirrors.</p>
            <p>• <span class="n-hl">Convex Mirror:</span> Diverging mirror. Always forms virtual, erect, and diminished images.</p>
            <div class="n-formula">Mirror Formula: 1/v + 1/u = 1/f</div>
        </div>
        <div class="n-section">
            <div class="n-h3">3. Refraction & Lenses</div>
            <p>• <span class="n-hl">Snell's Law:</span> sin(i) / sin(r) = constant (Refractive Index).</p>
            <div class="n-formula">Lens Formula: 1/v - 1/u = 1/f</div>
            <div class="n-formula">Power of Lens (P) = 1 / f (in meters). Unit: Dioptre (D)</div>
        </div>
    `,

    // ------------------------------------------
    // MATHEMATICS
    // ------------------------------------------
    "Mathematics-Algebra & Numbers-RealNumbers": `
        <div class="n-title">REAL NUMBERS</div>
        <div class="n-section">
            <div class="n-h3">1. Fundamental Theorem of Arithmetic</div>
            <p>• Every composite number can be expressed as a unique product of primes.</p>
            <div class="n-formula">HCF(a,b) × LCM(a,b) = a × b</div>
        </div>
        <div class="n-section">
            <div class="n-h3">2. Irrationality</div>
            <p>• Let p be a prime number. If p divides <span class="n-hl">a²</span>, then p divides <span class="n-hl">a</span>.</p>
            <p>• Numbers like √2, √3, and √5 are proven irrational using the method of contradiction.</p>
        </div>
    `,

    "Mathematics-Algebra & Numbers-Polynomials": `
        <div class="n-title">POLYNOMIALS</div>
        <div class="n-section">
            <div class="n-h3">1. Geometrical Meaning of Zeroes</div>
            <p>• The zeroes of a polynomial are the x-coordinates of the points where its graph intersects the <span class="n-hl">x-axis</span>.</p>
        </div>
        <div class="n-section">
            <div class="n-h3">2. Quadratic Polynomials (ax² + bx + c)</div>
            <p>• Let α and β be the zeroes of the polynomial.</p>
            <div class="n-formula">Sum of Zeroes (α + β) = -b / a</div>
            <div class="n-formula">Product of Zeroes (α × β) = c / a</div>
        </div>
    `,

    "Mathematics-Algebra & Numbers-PairofLinearEquations": `
        <div class="n-title">PAIR OF LINEAR EQUATIONS</div>
        <div class="n-section">
            <div class="n-h3">Conditions for Lines: (a₁x + b₁y + c₁ = 0) & (a₂x + b₂y + c₂ = 0)</div>
            <p>• <span class="n-hl">Intersecting Lines:</span> a₁/a₂ ≠ b₁/b₂ (Exactly one unique solution, Consistent).</p>
            <p>• <span class="n-hl">Parallel Lines:</span> a₁/a₂ = b₁/b₂ ≠ c₁/c₂ (No solution, Inconsistent).</p>
            <p>• <span class="n-hl">Coincident Lines:</span> a₁/a₂ = b₁/b₂ = c₁/c₂ (Infinite solutions, Dependent/Consistent).</p>
        </div>
    `,

    "Mathematics-Algebra & Numbers-QuadraticEquations": `
        <div class="n-title">QUADRATIC EQUATIONS</div>
        <div class="n-section">
            <div class="n-h3">1. The Quadratic Formula</div>
            <p>• For any equation ax² + bx + c = 0, the roots are found using:</p>
            <div class="n-formula">x = [ -b ± √(b² - 4ac) ] / 2a</div>
        </div>
        <div class="n-section">
            <div class="n-h3">2. The Discriminant (D)</div>
            <div class="n-formula">D = b² - 4ac</div>
            <p>• If <span class="n-hl">D > 0</span>: Two distinct real roots.</p>
            <p>• If <span class="n-hl">D = 0</span>: Two equal real roots.</p>
            <p>• If <span class="n-hl">D < 0</span>: No real roots.</p>
        </div>
    `,

    "Mathematics-Algebra & Numbers-ArithmeticProgressions": `
        <div class="n-title">ARITHMETIC PROGRESSIONS (AP)</div>
        <div class="n-section">
            <div class="n-h3">1. General Term</div>
            <p>• Where 'a' is the first term and 'd' is the common difference.</p>
            <div class="n-formula">nth term (aₙ) = a + (n - 1)d</div>
        </div>
        <div class="n-section">
            <div class="n-h3">2. Sum of First 'n' Terms</div>
            <div class="n-formula">Sₙ = (n/2) × [2a + (n - 1)d]</div>
            <p>• If the last term 'l' is known: <span class="n-hl">Sₙ = (n/2) × (a + l)</span></p>
        </div>
    `,

    "Mathematics-Geometry-CoordinateGeometry": `
        <div class="n-title">COORDINATE GEOMETRY</div>
        <div class="n-section">
            <div class="n-h3">1. Distance Formula</div>
            <p>• Distance between points (x₁, y₁) and (x₂, y₂):</p>
            <div class="n-formula">d = √[ (x₂ - x₁)² + (y₂ - y₁)² ]</div>
        </div>
        <div class="n-section">
            <div class="n-h3">2. Section & Midpoint Formulas</div>
            <p>• Point dividing a line in ratio m₁:m₂ :</p>
            <div class="n-formula">x = (m₁x₂ + m₂x₁)/(m₁+m₂), y = (m₁y₂ + m₂y₁)/(m₁+m₂)</div>
            <p>• Midpoint: <span class="n-hl">((x₁+x₂)/2, (y₁+y₂)/2)</span></p>
        </div>
    `,

    "Mathematics-Geometry-Triangles": `
        <div class="n-title">TRIANGLES</div>
        <div class="n-section">
            <div class="n-h3">1. Basic Proportionality Theorem (Thales)</div>
            <p>• If a line is drawn parallel to one side of a triangle intersecting the other two sides, then it divides the two sides in the same ratio.</p>
            <div class="n-formula">If DE || BC, then AD/DB = AE/EC</div>
        </div>
        <div class="n-section">
            <div class="n-h3">2. Similarity Criteria</div>
            <p>• <span class="n-hl">AAA (Angle-Angle-Angle):</span> Corresponding angles are equal.</p>
            <p>• <span class="n-hl">SSS (Side-Side-Side):</span> Corresponding sides are proportional.</p>
            <p>• <span class="n-hl">SAS (Side-Angle-Side):</span> One angle is equal and including sides are proportional.</p>
        </div>
    `,

    "Mathematics-Geometry-Circles": `
        <div class="n-title">CIRCLES</div>
        <div class="n-section">
            <div class="n-h3">1. Tangent Properties</div>
            <p>• The tangent at any point of a circle is <span class="n-hl">perpendicular</span> to the radius through the point of contact.</p>
            <p>• The lengths of tangents drawn from an external point to a circle are <span class="n-hl">equal</span>.</p>
        </div>
        <div class="n-section">
            <div class="n-h3">2. Key Facts</div>
            <p>• A circle can have a maximum of two parallel tangents.</p>
            <p>• The line containing the radius through the point of contact is called the 'normal' to the circle at the point.</p>
        </div>
    `,

    "Mathematics-Geometry-AreasRelatedtoCircles": `
        <div class="n-title">AREAS RELATED TO CIRCLES</div>
        <div class="n-section">
            <div class="n-h3">1. Circle Basics</div>
            <p>• Circumference = <span class="n-hl">2πr</span>  |  Area = <span class="n-hl">πr²</span></p>
        </div>
        <div class="n-section">
            <div class="n-h3">2. Sectors and Arcs (Angle θ)</div>
            <div class="n-formula">Length of Arc = (θ/360) × 2πr</div>
            <div class="n-formula">Area of Sector = (θ/360) × πr²</div>
            <p>• Area of Segment = Area of corresponding sector - Area of corresponding triangle.</p>
        </div>
    `,

    "Mathematics-Geometry-SurfaceAreasandVolumes": `
        <div class="n-title">SURFACE AREAS & VOLUMES</div>
        <div class="n-section">
            <div class="n-h3">1. Cylinder</div>
            <p>• Curved Surface Area = <span class="n-hl">2πrh</span></p>
            <p>• Total Surface Area = <span class="n-hl">2πr(r + h)</span></p>
            <p>• Volume = <span class="n-hl">πr²h</span></p>
        </div>
        <div class="n-section">
            <div class="n-h3">2. Cone & Sphere</div>
            <p>• Cone Volume = <span class="n-hl">(1/3)πr²h</span>  |  CSA = <span class="n-hl">πrl</span> (where l = √(r²+h²))</p>
            <p>• Sphere Volume = <span class="n-hl">(4/3)πr³</span>  |  Surface Area = <span class="n-hl">4πr²</span></p>
            <p>• Hemisphere Volume = <span class="n-hl">(2/3)πr³</span>  |  TSA = <span class="n-hl">3πr²</span></p>
        </div>
    `,

    "Mathematics-Trigonometry & Stats-IntrotoTrigonometry": `
        <div class="n-title">INTRODUCTION TO TRIGONOMETRY</div>
        <div class="n-section">
            <div class="n-h3">1. Trigonometric Ratios (Right Triangle)</div>
            <p>• sin θ = P / H  |  cos θ = B / H  |  tan θ = P / B</p>
            <p>• cosec θ = H / P  |  sec θ = H / B  |  cot θ = B / P</p>
        </div>
        <div class="n-section">
            <div class="n-h3">2. Fundamental Identities</div>
            <div class="n-formula">sin²θ + cos²θ = 1</div>
            <div class="n-formula">1 + tan²θ = sec²θ</div>
            <div class="n-formula">1 + cot²θ = cosec²θ</div>
        </div>
    `,

    "Mathematics-Trigonometry & Stats-HeightsandDistances": `
        <div class="n-title">HEIGHTS AND DISTANCES</div>
        <div class="n-section">
            <div class="n-h3">1. Line of Sight & Angles</div>
            <p>• <span class="n-hl">Angle of Elevation:</span> The angle formed above the horizontal line when looking up at an object.</p>
            <p>• <span class="n-hl">Angle of Depression:</span> The angle formed below the horizontal line when looking down at an object.</p>
        </div>
        <div class="n-section">
            <div class="n-h3">2. Key Strategy</div>
            <p>• Always draw a right-angled triangle mapping the height (P) and base distance (B). Use <span class="n-hl">tan θ = P/B</span> in 90% of numericals to find the missing side.</p>
        </div>
    `,

    "Mathematics-Trigonometry & Stats-Statistics": `
        <div class="n-title">STATISTICS</div>
        <div class="n-section">
            <div class="n-h3">1. Mean (Average)</div>
            <p>• Direct Method: <span class="n-hl">x̄ = Σfᵢxᵢ / Σfᵢ</span></p>
            <p>• Assumed Mean Method: <span class="n-hl">x̄ = a + (Σfᵢdᵢ / Σfᵢ)</span> where dᵢ = xᵢ - a</p>
        </div>
        <div class="n-section">
            <div class="n-h3">2. Median, Mode & Empirical Formula</div>
            <p>• Mode is the value with the highest frequency.</p>
            <p>• Median is the middlemost value of sorted data.</p>
            <div class="n-formula">3 × Median = Mode + 2 × Mean</div>
        </div>
    `,

    "Mathematics-Trigonometry & Stats-Probability": `
        <div class="n-title">PROBABILITY</div>
        <div class="n-section">
            <div class="n-h3">1. Theoretical Probability Formula</div>
            <div class="n-formula">P(E) = (Favorable Outcomes) / (Total Possible Outcomes)</div>
        </div>
        <div class="n-section">
            <div class="n-h3">2. Key Rules</div>
            <p>• The probability of a sure event is <span class="n-hl">1</span>.</p>
            <p>• The probability of an impossible event is <span class="n-hl">0</span>.</p>
            <p>• Probability always lies between 0 and 1: <span class="n-hl">0 ≤ P(E) ≤ 1</span>.</p>
            <div class="n-formula">P(E) + P(not E) = 1</div>
        </div>
    `
};
        
