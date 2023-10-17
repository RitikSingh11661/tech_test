import { Box, Button, Checkbox, Flex, Image, Text, FormControl, Input, FormLabel, Textarea, Select } from '@chakra-ui/react'
import { useNavigate } from 'react-router-dom';
import React, { useState } from 'react'

export const CreateAds = () => {
    const navigate = useNavigate();
    const [isAddCheckedType, setIsAddCheckedType] = useState(false);
    const [isTextAdSelected, setIsTextAdSelected] = useState(false);
    const [isMediaAdSelected, setIsMediaAdSelected] = useState(false);
    const [isNextClicked, setIsNextClicked] = useState(false);

    const handleNext = () => {
        if (isAddCheckedType === 1) {
            setIsTextAdSelected(true);
            setIsNextClicked(true);
        }
        else if (isAddCheckedType === 2) {
            setIsMediaAdSelected(true);
            setIsNextClicked(true);
        }
        else return alert('Please select atleaset one type of ad');
    }

    const handleBack = () => {
        setIsTextAdSelected(false);
        setIsMediaAdSelected(false);
        setIsNextClicked(false);
    }

    const handleSubmit = () => {
        navigate('/successfullAdd');
    }

    return (
        // <Box border={'1px solid #ded7d7'} width={'95%'} p={'2vh 2vw'} m={'auto'}>
        //     {!isNextClicked && <>
        //         <Text align={'left'} >Create Ads</Text>
        //         <Flex justifyContent={'center'} gap={'5vw'}>
        //             <Box borderRadius={'lg'} width={'25%'} height={'71vh'} pt={'4vh'} boxShadow={'rgba(100, 100, 111, 0.2) 0px 7px 29px 0px'}>
        //                 <Checkbox pr={'20vw'} borderRadius={'md'} onChange={() => setIsAddCheckedType(1)}></Checkbox>
        //                 <Image m={'auto'} h={'50vh'} src={'https://i.ibb.co/tsdwFvH/image.png'} alt={'ad type 1'} />
        //                 <Flex height={'14vh'} direction='column' justifyContent={'center'} bg={'#f4f3f3'}>
        //                     <Text color={'grey'} fontSize={'smaller'}>Create</Text>
        //                     <Text fontWeight={'bold'}>Text Ad</Text>
        //                 </Flex>
        //             </Box>
        //             <Box borderRadius={'lg'} width={'25%'} height={'71vh'} pt={'4vh'} boxShadow={'rgba(100, 100, 111, 0.2) 0px 7px 29px 0px'}>
        //                 <Checkbox pr={'20vw'} borderRadius={'md'} onChange={() => setIsAddCheckedType(2)} />
        //                 <Image m={'auto'} h={'50vh'} src={'https://i.ibb.co/VwNtffN/image.png'} alt={'ad type 2'} />
        //                 <Flex height={'14vh'} direction='column' justifyContent={'center'} bg={'#f4f3f3'}>
        //                     <Text color={'grey'} fontSize={'smaller'}>Create</Text>
        //                     <Text fontWeight={'bold'}>Media Ad</Text>
        //                 </Flex>
        //             </Box>
        //         </Flex>
        //         <Button onClick={handleNext} color={'white'} fontWeight={'semibold'} height={'5vh'} w={'10vw'} textAlign={'center'} ml={'90%'} bg='#01a9f4'>Next</Button>
        //     </>}
        //     {(isTextAdSelected || isMediaAdSelected) && <Text align={'left'}>Create Text & Media</Text>}
        //     {isTextAdSelected && <Flex gap={'2vw'} mt={'2vh'}>
        //         <Box width={'50%'}>
        //             <FormControl mr="5%">
        //                 <FormLabel fontWeight={'normal'}>
        //                     Heading 01
        //                 </FormLabel>
        //                 <Input id="heading01" placeholder="Add a heading that would make user interested" />
        //             </FormControl>
        //             <FormControl mr="5%">
        //                 <FormLabel fontWeight={'normal'}>
        //                     Heading 02
        //                 </FormLabel>
        //                 <Input id="heading02" placeholder="Add a heading that would make user interested" />
        //             </FormControl>
        //             <FormControl mr="5%">
        //                 <FormLabel fontWeight={'normal'}>
        //                     Business Name
        //                 </FormLabel>
        //                 <Input id="heading01" placeholder="Add your business name" />
        //             </FormControl>
        //             <FormControl mr="5%">
        //                 <FormLabel fontWeight={'normal'}>
        //                     Website URL
        //                 </FormLabel>
        //                 <Input id="heading01" width={'6xl'} placeholder="Add the URL of the landing page you want to redirect users to" />
        //             </FormControl>
        //         </Box>
        //         <Box width={'50%'}>
        //             <FormControl>
        //                 <FormLabel htmlFor="description01" fontWeight={'normal'}>Description 01</FormLabel>
        //                 <Textarea id="description01" height={'20vh'} placeholder="Add a description" />
        //             </FormControl>
        //             <FormControl>
        //                 <FormLabel htmlFor="description01" fontWeight={'normal'}>
        //                     Button Label
        //                 </FormLabel>
        //                 <Select color={'grey'} placeholder='Select a label that best suit your ad'>
        //                     <option value='label 1'>Label 1</option>
        //                     <option value='label 2'>Label 2</option>
        //                 </Select>
        //             </FormControl>
        //         </Box>
        //     </Flex>}
        //     {isMediaAdSelected && <Flex gap={'2vw'} mt={'2vh'}>
        //         <Box width={'50%'}>
        //             <FormControl mr="5%">
        //                 <FormLabel fontWeight={'normal'}>Heading 01</FormLabel>
        //                 <Input id="heading01" placeholder="Add a heading that would make user interested" />
        //             </FormControl>
        //             <FormControl mr="5%">
        //                 <FormLabel fontWeight={'normal'}>Heading 02</FormLabel>
        //                 <Input id="heading02" placeholder="Add a heading that would make user interested" />
        //             </FormControl>
        //             <Flex>
        //                 <FormControl mr="5%">
        //                     <FormLabel fontWeight={'normal'}>
        //                         Landscape Marketing Image (1.9:1)
        //                     </FormLabel>
        //                     <Input id="heading01" width={'29vw'} placeholder="Add the URL of the landing page you want to redirect users to" />
        //                 </FormControl>
        //                 <FormControl mr="5%">
        //                     <FormLabel fontWeight={'normal'}>
        //                         Profrait Marketing Image (4:5)
        //                     </FormLabel>
        //                     <Input id="heading01" width={'29vw'} placeholder="Add the URL of the landing page you want to redirect users to" />
        //                 </FormControl>
        //                 <FormControl mr="5%">
        //                     <FormLabel fontWeight={'normal'}>
        //                         Square Marketing Image (1:1)
        //                     </FormLabel>
        //                     <Input id="heading01" width={'29vw'} placeholder="Add the URL of the landing page you want to redirect users to" />
        //                 </FormControl>
        //             </Flex>
        //             <FormControl mr="5%">
        //                 <FormLabel fontWeight={'normal'}>Video URL</FormLabel>
        //                 <Input id="heading01" width={'6xl'} placeholder="Add the URL of the landing page you want to redirect users to" />
        //             </FormControl>
        //             <FormControl mr="5%">
        //                 <FormLabel fontWeight={'normal'}>Business Name</FormLabel>
        //                 <Input id="heading01" placeholder="Add your business name" />
        //             </FormControl>
        //             <FormControl>
        //                 <FormLabel htmlFor="description01" fontWeight={'normal'}>Button Label</FormLabel>
        //                 <Select color={'grey'} placeholder='Select a label that best suit your ad'>
        //                     <option value='label 1'>Label 1</option>
        //                     <option value='label 2'>Label 2</option>
        //                 </Select>
        //             </FormControl>
        //             <FormControl mr="5%">
        //                 <FormLabel fontWeight={'normal'}>
        //                     Website URL
        //                 </FormLabel>
        //                 <Input id="heading01" width={'6xl'} placeholder="Add the URL of the landing page you want to redirect users to" />
        //             </FormControl>

        //         </Box>
        //         <FormControl width={'50%'}>
        //             <FormLabel htmlFor="description01" fontWeight={'normal'}>Description 01</FormLabel>
        //             <Textarea id="description01" height={'20vh'} placeholder="Add a description" />
        //         </FormControl>
        //     </Flex>}
        //     {(isTextAdSelected || isMediaAdSelected) && <Flex>
        //         <Flex display={'flex'} mt={'20vh'} ml={'77.5%'} gap={'2vw'}>
        //             <Button onClick={handleBack} fontWeight={'semibold'} height={'5vh'} w={'10vw'} textAlign={'center'} bg='#f2f2f2'>Back</Button>
        //             <Button onClick={handleSubmit} color={'white'} fontWeight={'semibold'} height={'5vh'} w={'10vw'} textAlign={'center'} bg='#01a9f4'>Submit</Button>
        //         </Flex>
        //     </Flex>}
        // </Box>
        <Box border={'1px solid #ded7d7'} width={['97%', '80%']} p={['2vh 2vw', '4vh 4vw']} m="auto">
            {!isNextClicked && (
                <>
                    <Text align="left">Create Ads</Text>
                    <Flex justifyContent={['center']} flexWrap={['wrap', 'nowrap']} gap={['5vw', '2vw']}>
                        <Box
                            borderRadius="lg"
                            width={['100%', '40%']}
                            height={['auto', '71vh']}
                            pt={['2vh', '4vh']}
                            boxShadow="rgba(100, 100, 111, 0.2) 0px 7px 29px 0px"
                        >
                            <Checkbox
                                pr={['5vw', '20vw']}
                                borderRadius="md"
                                onChange={() => setIsAddCheckedType(1)}
                            ></Checkbox>
                            <Image
                                m="auto"
                                h={['auto', '50vh']}
                                src="https://i.ibb.co/tsdwFvH/image.png"
                                alt="ad type 1"
                            />
                            <Flex height={['auto', '14vh']} direction="column" justifyContent="center" bg="#f4f3f3">
                                <Text color="grey" fontSize="smaller">
                                    Create
                                </Text>
                                <Text fontWeight="bold">Text Ad</Text>
                            </Flex>
                        </Box>
                        <Box
                            borderRadius="lg"
                            width={['100%', '40%']}
                            height={['auto', '71vh']}
                            pt={['2vh', '4vh']}
                            boxShadow="rgba(100, 100, 111, 0.2) 0px 7px 29px 0px"
                        >
                            <Checkbox pr={['5vw', '20vw']} borderRadius="md" onChange={() => setIsAddCheckedType(2)} />
                            <Image m="auto" h={['auto', '50vh']} src="https://i.ibb.co/VwNtffN/image.png" alt="ad type 2" />
                            <Flex height={['auto', '14vh']} direction="column" justifyContent="center" bg="#f4f3f3">
                                <Text color="grey" fontSize="smaller">
                                    Create
                                </Text>
                                <Text fontWeight="bold">Media Ad</Text>
                            </Flex>
                        </Box>
                    </Flex>
                    <Button
                        onClick={handleNext}
                        color="white"
                        fontWeight="semibold"
                        height="5vh"
                        w={['100%', '10vw']}
                        mt={['2vh', '0']}
                        ml={['0', '90%']}
                        bg="#01a9f4"
                    >
                        Next
                    </Button>
                </>
            )}
            {(isTextAdSelected || isMediaAdSelected) && <Text align="left">Create Text & Media</Text>}
            {isTextAdSelected && (
                <Flex gap={['2vw', '2vw']} mt="2vh">
                    <Box width={['100%', '50%']}>
                        <FormControl mr={['0', '5%']}>
                            <FormLabel fontWeight="normal">Heading 01</FormLabel>
                            <Input id="heading01" placeholder="Add a heading that would make the user interested" />
                        </FormControl>
                        <FormControl mr="5%">
                            <FormLabel fontWeight={'normal'}>
                                Heading 02
                            </FormLabel>
                            <Input id="heading02" placeholder="Add a heading that would make user interested" />
                        </FormControl>
                        <FormControl mr="5%">
                            <FormLabel fontWeight={'normal'}>
                                Business Name
                            </FormLabel>
                            <Input id="heading01" placeholder="Add your business name" />
                        </FormControl>
                        <FormControl mr="5%">
                            <FormLabel fontWeight={'normal'}>
                                Website URL
                            </FormLabel>
                            <Input id="heading01" width={'205%'} placeholder="Add the URL of the landing page you want to redirect users to" />
                        </FormControl>
                    </Box>
                    <Box width={['100%', '50%']}>
                        <FormControl>
                            <FormLabel htmlFor="description01" fontWeight="normal">
                                Description 01
                            </FormLabel>
                            <Textarea id="description01" height={['auto', '20vh']} placeholder="Add a description" />
                        </FormControl>
                        <FormControl>
                            <FormLabel htmlFor="description01" fontWeight={'normal'}>
                                Button Label
                            </FormLabel>
                            <Select color={'grey'} placeholder='Select a label that best suit your ad'>
                                <option value='label 1'>Label 1</option>
                                <option value='label 2'>Label 2</option>
                            </Select>
                        </FormControl>
                    </Box>
                </Flex>
            )}
            {isMediaAdSelected && (
                <Flex gap={['2vw', '2vw']} mt="2vh">
                    <Box width={['100%', '50%']}>
                        <FormControl mr={['0', '5%']}>
                            <FormLabel fontWeight="normal">Heading 01</FormLabel>
                            <Input id="heading01" placeholder="Add a heading that would make the user interested" />
                        </FormControl>
                        <FormControl mr="5%">
                            <FormLabel fontWeight={'normal'}>Heading 02</FormLabel>
                            <Input id="heading02" placeholder="Add a heading that would make user interested" />
                        </FormControl>
                        <Flex>
                            <FormControl mr="5%">
                                <FormLabel fontWeight={'normal'}>
                                    Landscape Marketing Image (1.9:1)
                                </FormLabel>
                                <Input id="heading01" width={'29vw'} placeholder="Add the URL of the landing page you want to redirect users to" />
                            </FormControl>
                            <FormControl mr="5%">
                                <FormLabel fontWeight={'normal'}>
                                    Profrait Marketing Image (4:5)
                                </FormLabel>
                                <Input id="heading01" width={'29vw'} placeholder="Add the URL of the landing page you want to redirect users to" />
                            </FormControl>
                            <FormControl mr="5%">
                                <FormLabel fontWeight={'normal'}>
                                    Square Marketing Image (1:1)
                                </FormLabel>
                                <Input id="heading01" width={'29vw'} placeholder="Add the URL of the landing page you want to redirect users to" />
                            </FormControl>
                        </Flex>
                        <FormControl mr="5%">
                            <FormLabel fontWeight={'normal'}>Video URL</FormLabel>
                            <Input id="heading01" width={'6xl'} placeholder="Add the URL of the landing page you want to redirect users to" />
                        </FormControl>
                        <FormControl mr="5%">
                            <FormLabel fontWeight={'normal'}>Business Name</FormLabel>
                            <Input id="heading01" placeholder="Add your business name" />
                        </FormControl>
                        <FormControl>
                            <FormLabel htmlFor="description01" fontWeight={'normal'}>Button Label</FormLabel>
                            <Select color={'grey'} placeholder='Select a label that best suit your ad'>
                                <option value='label 1'>Label 1</option>
                                <option value='label 2'>Label 2</option>
                            </Select>
                        </FormControl>
                        <FormControl mr="5%">
                            <FormLabel fontWeight={'normal'}>
                                Website URL
                            </FormLabel>
                            <Input id="heading01" width={'6xl'} placeholder="Add the URL of the landing page you want to redirect users to" />
                        </FormControl>
                    </Box>
                    <FormControl width={['100%', '50%']}>
                        <FormLabel htmlFor="description01" fontWeight="normal">
                            Description 01
                        </FormLabel>
                        <Textarea id="description01" height={['auto', '20vh']} placeholder="Add a description" />
                    </FormControl>
                </Flex>
            )}
            {(isTextAdSelected || isMediaAdSelected) && (
                <Flex mt="2vh" justifyContent={['center', 'flex-start']} ml={['0', '77.5%']} gap={['2vw', '2vw']}>
                    <Button onClick={handleBack} fontWeight="semibold" height="5vh" w={['100%', '10vw']} bg="#f2f2f2">
                        Back
                    </Button>
                    <Button onClick={handleSubmit} color="white" fontWeight="semibold" height="5vh" w={['100%', '10vw']} bg="#01a9f4">
                        Submit
                    </Button>
                </Flex>
            )}
        </Box>
    )
}