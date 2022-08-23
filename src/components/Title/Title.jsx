import React from 'react'
import { BikeB, BikeF, Box, Button, Info, Mask, Rate, Section, TextBox } from './TitleStyled'

const Title = () => {
    return (
        <Section>
            <Box dark>
                <Mask />
                <TextBox>
                    <h1>Take The <br /> Streets.</h1>
                    <span>Title 1</span>
                    <p>
                        <b>Learning this website design</b>
                        Keep learn and code is my favorite thing.
                    </p>
                    <Button>Book a test ride</Button>
                </TextBox>
                <BikeF src={require("../../assets/bikef.png")} />
            </Box>

            <Box>
                <TextBox flex>
                    <BikeB src={require("../../assets/bikeb.png")}></BikeB>
                    <Rate>
                        <span>
                            <img src={require("../../assets/Star.png")} alt="" />
                            <img src={require("../../assets/Star.png")} alt="" />
                            <img src={require("../../assets/Star.png")} alt="" />
                            <img src={require("../../assets/Star.png")} alt="" />
                            <img src={require("../../assets/Star.png")} alt="" />
                        </span>
                        <br />
                        1000+ Reviews
                    </Rate>
                    <Info>
                        <div>
                            <h2>25 km/hr</h2>
                            <h3>Assist Speed</h3>
                        </div>
                        <div>
                            <h2>3.5 km</h2>
                            <h3>Battery range</h3>
                        </div>
                        <div>
                            <h2>3.5 hr</h2>
                            <h3>charging time</h3>
                        </div>
                        <div>
                            <h2>16.9 kg</h2>
                            <h3>weight</h3>
                        </div>
                    </Info>
                </TextBox>

            </Box>
        </Section>
    )
}

export default Title