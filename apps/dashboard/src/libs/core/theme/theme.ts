import { Theme } from "./types/theme";

export const theme: Theme = {
    name: 'theme',
    palette: {
        primary: {
            10: '#001F33',
            20: '#003E66',
            25: '#004D80',
            30: '#005C99',
            35: '#006CB2',
            40: '#007BCC',
            50: '#009AFF',
            60: '#33AEFF',
            70: '#66C2FF',
            80: '#99D7FF',
            90: '#CCEBFF',
            95: '#E5F5FF',
            98: '#F5FBFF',
        },
    
        secondary: {         
            10: '#330019',
            20: '#660032',
            25: '#80003E',
            30: '#99004B',
            35: '#B20057',
            40: '#CC0064',
            50: '#FF017D',
            60: '#FF3397',
            70: '#FF66B1',
            80: '#FF99CB',
            90: '#FFCCE5',
            95: '#FFE5F2',
            98: '#FFF5FA',
        },
    
        neutral: {
            10: '#1A1C1E',
            20: '#2F3033',
            25: '#3A3B3E',
            30: '#45474A',
            35: '#515255',
            40: '#5D5E61',
            50: '#76777A',
            60: '#909194',
            70: '#AAABAE',
            80: '#C6C6C9',
            90: '#E2E2E5',
            95: '#F0F0F4',
            98: '#F9F9FC',
        },
    
        red: {
            10: '#410003',
            20: '#690007',
            25: '#7D000B',
            30: '#93000F',
            35: '#A90013',
            40: '#C00017',
            50: '#E7242A',
            60: '#FF544D',
            70: '#FF897F',
            80: '#FFB4AC',
            90: '#FFDAD6',
            95: '#FFEDEB',
            98: '#FFF8F7',
        },
    
        yellow: {          
            10: '#241A00',
            20: '#3C2F00',
            25: '#4A3A00',
            30: '#574500',
            35: '#655000',
            40: '#735C00',
            50: '#917400',
            60: '#AF8D00',
            70: '#CFA700',
            80: '#EFC115',
            90: '#FFE088',
            95: '#FFEFCC',
            98: '#FFF8F0',
        },
    
        green: {
            10: '#00210C',
            20: '#003919',
            25: '#004520',
            30: '#005227',
            35: '#00602E',
            40: '#006D36',
            50: '#008945',
            60: '#06A656',
            70: '#3AC26E',
            80: '#5BDF87',
            90: '#79FCA0',
            95: '#DCF9E0',
            98: '#EAFFE9',
        },
    
        blue: {
            10: '#001D35',
            20: '#003256',
            25: '#003E68',
            30: '#00497A',
            35: '#00558D',
            40: '#0062A0',
            50: '#007BC8',
            60: '#0096F2',
            70: '#5DB0FF',
            80: '#9CCAFF',
            90: '#D0E4FF',
            95: '#E9F1FF',
            98: '#F8F9FF',
        },
        common: {
            light: '#FFFFFF',
            dark: '#000000'
        }
    },
    breakpoints: {
        sm: 480,
        md: 768,
        lg: 1024,
        xl: 1200,
    },
    shadows: {
        xs: '0px 1px 3px 1px rgba(0, 0, 0, 0.08), 0px 1px 2px 0px rgba(0, 0, 0, 0.15)',
        sm: '0px 2px 6px 2px rgba(0, 0, 0, 0.08), 0px 1px 2px 0px rgba(0, 0, 0, 0.15)',
        md: '0px 1px 3px 0px rgba(0, 0, 0, 0.15), 0px 4px 8px 3px rgba(0, 0, 0, 0.08)',
        lg: '0px 2px 3px 0px rgba(0, 0, 0, 0.15), 0px 6px 10px 4px rgba(0, 0, 0, 0.08)',
        xl: '0px 4px 4px 0px rgba(0, 0, 0, 0.15), 0px 8px 12px 6px rgba(0, 0, 0, 0.08)'
    },
    typography: {
        display: {
            lineHeight: '120%',
            fontWeight: '600',
            fontFamily: `'Raleway', sans-serif`,
            sizes: {
                xs: {
                    fontSize: '24px',
                    letterSpacing: '0',
                },            
                sm: {
                    fontSize: '32px',
                    letterSpacing: '0',
                },
                md: {
                    fontSize: '40px',
                    letterSpacing: '0',
                },
                lg: {
                    fontSize: '48px',
                    letterSpacing: '0',
                },
                xl: {
                    fontSize: '56px',
                    letterSpacing: '0',
                }           
            }
        },
        headline: {
            lineHeight: '125%',
            fontWeight: '500',
            fontFamily: `'Inter', sans-serif`,
            sizes: {
                xs: {
                    fontSize: '20px',
                    letterSpacing: '0',
                }, 
                sm: {
                    fontSize: '24px',
                    letterSpacing: '0',
                },
                md: {
                    fontSize: '28px',
                    letterSpacing: '0',
                },
                lg: {
                    fontSize: '32px',
                    letterSpacing: '0',
                },
                xl: {
                    fontSize: '36px',
                    letterSpacing: '0',
                } 
            }        
        },
        title: {
            lineHeight: '132%',
            fontWeight: '400',
            fontFamily: `'Inter', sans-serif`,
            sizes: {
                xs: {
                    fontSize: '16px',
                    letterSpacing: '0.08',
                }, 
                sm: {
                    fontSize: '18px',
                    letterSpacing: '0.06'
                },
                md: {
                    fontSize: '20px',
                    letterSpacing: '0.04',
                },
                lg: {
                    fontSize: '22px',
                    letterSpacing: '0.02',
                },
                xl: {
                    fontSize: '24px',
                    letterSpacing: '0',
                } 
            }        
        },
        body: {
            lineHeight: '140%',
            fontWeight: '400',
            fontFamily: `'Inter', sans-serif`,
            sizes: {
                xs: {
                    fontSize: '10px',
                    letterSpacing: '0.65',
                }, 
                sm: {
                    fontSize: '12px',
                    letterSpacing: '0.4'
                },
                md: {
                    fontSize: '14px',
                    letterSpacing: '0.25',
                },
                lg: {
                    fontSize: '16px',
                    letterSpacing: '0.15',
                },
                xl: {
                    fontSize: '18px',
                    letterSpacing: '0.15',
                } 
            }            
        },
        bodyStrong: {
            lineHeight: '140%',
            fontWeight: '700',
            fontFamily: `'Inter', sans-serif`,
            sizes: {
                xs: {
                    fontSize: '10px',
                    letterSpacing: '0.65',
                }, 
                sm: {
                    fontSize: '12px',
                    letterSpacing: '0.45'
                },
                md: {
                    fontSize: '14px',
                    letterSpacing: '0.30',
                },
                lg: {
                    fontSize: '16px',
                    letterSpacing: '0.20',
                },
                xl: {
                    fontSize: '18px',
                    letterSpacing: '0.15',
                } 
            }            
            
        }
    },
    paragraphs: {
        display: {
            fontWeight: '500',
            fontFamily: `'Raleway', sans-serif`,
            sizes: {
                xs: {
                    fontSize: '24px',
                    lineHeight: '28.8px',
                },
                sm: {
                    fontSize: '32px',
                    lineHeight: '38.4px',
                },
                md: {
                    fontSize: '40px',
                    lineHeight: '48px',
                },
                lg: {
                    fontSize: '48px',
                    lineHeight: '57.6px',
                },
                xl: {
                    fontSize: '56px',
                    lineHeight: '67.2px',
                }
            }
        },
        headline: {
            fontWeight: '500',
            fontFamily: `'Inter', sans-serif`,
            sizes: {
                xs: {
                    fontSize: '20px',
                    lineHeight: '25px',
                },
                sm: {
                    fontSize: '24px',
                    lineHeight: '30px',
                },
                md: {
                    fontSize: '28px',
                    lineHeight: '35px',
                },
                lg: {
                    fontSize: '32px',
                    lineHeight: '40px',
                },
                xl: {
                    fontSize: '36px',
                    lineHeight: '45px',
                }
            }
        },
        title: {
            fontWeight: '600',
            fontFamily: `'Inter', sans-serif`,
            sizes: {
                xs: {
                    fontSize: '16px',
                    lineHeight: '21.21px',
                    letterSpacing: '0.08px'
                },
                sm: {
                    fontSize: '18px',
                    lineHeight: '23.76px',
                    letterSpacing: '0.06px'
                },
                md: {
                    fontSize: '20px',
                    lineHeight: '26.4px',
                    letterSpacing: '0.04px'
                },
                lg: {
                    fontSize: '22px',
                    lineHeight: '29.04px',
                    letterSpacing: '0.02px'
                },
                xl: {
                    fontSize: '24px',
                    lineHeight: '31.68px',
                    letterSpacing: '0px'
                }
            }
        },
        body: {
            fontWeight: '400',
            fontFamily: `'Inter', sans-serif`,
            sizes: {
                xs: {
                    fontSize: '10px',
                    lineHeight: '14px',
                    letterSpacing: '0.6px'
                },
                sm: {
                    fontSize: '12px',
                    lineHeight: '16.8px',
                    letterSpacing: '0.4px'
                },
                md: {
                    fontSize: '14px',
                    lineHeight: '19.6px',
                    letterSpacing: '0.25px'
                },
                lg: {
                    fontSize: '16px',
                    lineHeight: '22.4px',
                    letterSpacing: '0.15px'
                },
                xl: {
                    fontSize: '18px',
                    lineHeight: '25.2px',
                    letterSpacing: '0.1px'
                }
            }
        },
        bodyStrong: {
            fontWeight: '700',
            fontFamily: `'Inter', sans-serif`,
            sizes: {
                xs: {
                    fontSize: '10px',
                    lineHeight: '14px',
                    letterSpacing: '0.65px'
                },
                sm: {
                    fontSize: '12px',
                    lineHeight: '16.8px',
                    letterSpacing: '0.45px'
                },
                md: {
                    fontSize: '14px',
                    lineHeight: '19.6px',
                    letterSpacing: '0.3px'
                },
                lg: {
                    fontSize: '16px',
                    lineHeight: '22.4px',
                    letterSpacing: '0.2px'
                },
                xl: {
                    fontSize: '18px',
                    lineHeight: '25.2px',
                    letterSpacing: '0.15px'
                }
            }
    
        }
    }

}