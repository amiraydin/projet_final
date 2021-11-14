
import turboExterior from '../images/AircraftsSofiane/turboProps/saab-340b.webp'
import turboCabin from '../images/AircraftsSofiane/turboProps/saab-340b-cabin.webp'
import lightExterior from '../images/AircraftsSofiane/lightJet/citation-cj4.webp'
import lightCabin from '../images/AircraftsSofiane/lightJet/citation-cj4-interior.webp'
import midSizeExterior from '../images/AircraftsSofiane/midSizeJet/gulfstream-g150-exterior.webp'
import midSizeCabin from '../images/AircraftsSofiane/midSizeJet/gulfstream-g150-cabin.webp'

import heavyExterior from '../images/AircraftsSofiane/heavyJet/bombardier-global-5000-exterior.webp'
import heavyCabin from '../images/AircraftsSofiane/heavyJet/bombardier-global-5000-interior.webp'


const dataAircrafts =
    [{
        turboprops: {
            "title": "SAAB 340",
            images: {
                exterior: turboExterior,
                cabin: turboCabin
            },
            "specification": {
                "PASSENGER CAPACITY": "up to 34 passengers",
                "MAX RANGE": "1,820 nm",
                "MAX OPERATIONAL SPEED": "283 ktas",
                "CABIN HEIGHT": "6 ft 0 in",
                "CABIN WIDTH": "7 ft 1 in",
                "CABIN LENGTH": "34 ft 1 in"
            },
            "description": "The SAAB 340 is a twin-engine turboprop airliner designed and manufactured in Sweden. It was originally developed from a partnership between SAAB and Fairchild, however when Fairchild discontinued its manufacturing processes, all construction was moved to Sweden. The airplane debuted in 1983 and has enjoyed wide success as a regional aircraft with airlines around the world and has been utilized in military applications as well. The airplane shows great versatility and has seating for more than 33 passengers and a crew of 3 (two pilots, and one flight attendant). Performance is good with the 340 capable of operating from airports with runways shorter than 5,500 feet. Speed isn’t bad either with the airplane able to cruise at nearly 280 knots. Range is typical for a regional airliner with a little over 900 nautical miles possible. Passenger comforts are also normal from what one would expect from a regional turboprop. There is no shortage of noise from the General Electric CT75A2 engines that swing 11-foot-diameter propellers and with 25,000 feet the maximum altitude, lower altitude cruise is the norm. The airplane is comfortable however, and the flight deck is mostly digital with modern avionics and lcd screens on the panel. As sales declined in the late 1990s, SAAB decided to cease production in 1998. Other variants of the airframe include the SAAB 340B (updated version with higher gross weight) and the SAAB 2000 (which retained the higher gross weight and added a stretched fuselage capable of carrying more than 55 passengers). The SAAB 2000 also had a fully modernized “glass flight deck” with lcd screens covering the panel. Although the airplane is no longer in production, it is still in service and many examples can be seen operating worldwide."
        },

        lightJet: {
            "title": "CESSNA CITATION CJ4",
            images: {
                exterior: lightExterior,
                cabin: lightCabin
            },
            "specification": {
                "PASSENGER CAPACITY": "up to 10 passengers",
                "MAX RANGE": "2,165 nm",
                "MAX OPERATIONAL SPEED": "451 ktas",
                "CABIN HEIGHT": "57 in",
                "CABIN WIDTH": "58 in",
                "CABIN LENGTH": "17.4 ft"
            },
            "description": "Built by the Cessna Aircraft Company in Wichita Kansas the Cessna Citation CJ4 is the newest and largest model jet in the CJ line with an additional 21inches in length over the CJ3. With Cessna’s proprietary Venue HD integrated cabin management system passengers are provided with high definition digital video and audio for in-flight entertainment or business. The Citation CJ4 stands out among competing light jets on cabin amenities alone. Six deep cushioned, wide leather seats articulate in three directions and can fully recline for long, comfortable trips. Each seat features a retractable armrests. When the CJ4’s first deliveries began in 2010, it aimed to fill the gap between the CJ3 and upgrading to a midsize jet, a feat that it has succeeded in. No matter the purpose of the flight, for business, personal enjoyment, or both, the CJ4 delivers on every aspect. With a range of up to 2,165 nm, the ability to take off at maximum weight from runways as short as 3,130 ft, and a maximum cruise speed of 451 knots , the CJ4 not only makes it possible to fly directly to airports closer to your destination, it reduces the time needed to get there."
        },
        midSizeJet: {
            "title": "Gulfstream G150",
            images: {
                exterior: midSizeExterior,
                cabin: midSizeCabin
            },
            "specification": {
                "PASSENGER CAPACITY": "up to 8 passengers",
                "MAX RANGE": "2950 nm",
                "MAX OPERATIONAL SPEED": "458 kts",
                "CABIN HEIGHT": "5.9 ft",
                "CABIN WIDTH": "5.9 ft",
                "CABIN LENGTH": "17.4 ft"
            },
            "description": "The Gulfstream G150 is one of the fastest midsize jets available and has close to 3,000 nautical miles of range. It has the capability to link most coastal cities in the United States. The airplane has a larger cross-section than its competitors allowing for more usable headroom than others in its class. The cabin is 18 feet long and 5 feet 9 inches in height.  Several cabin layouts are available including a club seating layout with two forward-facing seats in the rear of the cabin. Seating for seven passengers is the common configuration. Baggage space is slightly limited when compared to other aircraft in its class. It allows for fifty-five cubic feet of storage, which is nine cubic feet less than a comparable jet. The aircraft can operate at altitudes of up to 45,000 feet and fuel consumption is lower at higher speeds than that of other aircraft in its class. This aids in lowering operating costs. Runway performance is better than average as the airplane is capable of operations from 5,000-foot-long runways at sea level. The airplane has superb comfort, room, and performance coupled with reduced operating costs for its class, thus making it an excellent choice for longer trips."
        },
        heavyJet: {
            "title": "Bombardier Global 5000",
            images: {
                exterior: heavyExterior,
                cabin: heavyCabin
            },
            "specification": {
                "PASSENGER CAPACITY": "up to 13 passengers",
                "MAX RANGE": "5,200 nm",
                "MAX OPERATIONAL SPEED": "0.89 mach",
                "CABIN HEIGHT": "6.2 ft",
                "CABIN WIDTH": "7.11 ft",
                "CABIN LENGTH": "40.9 ft"
            },
            "description": "Announced in October of 2001 the Bombardier Global 5000 is a large cabin, ultra-long-range, heavy business jet manufactured by Bombardier Aerospace in Toronto, Canada. The Global 5000 is one of 3 current Global variants being a derivative of the Global Express. The Global 5000 was designed to take eight passengers and a crew of three 5530 MI at M0.85. With a fuselage shortened by 32in compared with the original Global Express, first flew in 2003 and entered service in April 2005. Global 5000 cabins’ have a three-zone seating area with forward and aft lavatories and passenger-controlled LED lighting throughout. The 10,000 LEDs can bathe the cabin in upwash, downwash, and accent lighting in white, red, and amber. Bombardier was able to increase window cross-section by 183%, allowing more light to enter the cabin and standing passengers to see the ground. Changes to the windows were spawned by customer requests. The Global 5000 has a spacious, quiet interior, elegant styling, and long legs. The Global 5000 is the perfect aircraft for long trips as it can reach destinations in Europe and southwest Asia from the East Coast of the US non-stop, with the most common flight time being just over 8hrs."
        }



    }]

export default dataAircrafts