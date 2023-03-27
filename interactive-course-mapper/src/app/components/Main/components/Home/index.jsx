import Card from '../../../Card';
import { Modal, Button } from 'antd'
import './index.css';

const Home = props => {
    const data = [
        {
            id: 1,
            title: 'ENG2005',
            content: 'math'
        },
        {
            id: 2,
            title: 'ENG',
            content: 'sqwe'
        },
        {
            id: 3,
            title: 'ENG',
            content: 'qwe'
        },
        {
            id: 4,
            title: 'ENG',
            content: 'qwe'
        },
        {
            id: 5,
            title: 'ENG',
            content: 'qwe'
        },
        {
            id: 6,
            title: 'ENG',
            content: 'qwe'
        },
        {
            id: 7,
            title: 'ENG',
            content: 'qwe'
        },
        {
            id: 8,
            title: 'ENG',
            content: 'qwe'
        },
        {
            id: 9,
            title: 'ENG',
            content: 'qwe'
        },
        {
            id: 10,
            title: 'ENG',
            content: 'qwe'
        },
        {
            id: 11,
            title: 'ENG',
            content: 'qwe'
        },
        {
            id: 12,
            title: 'ENG',
            content: 'qwe'
        },
        {
            id: 13,
            title: 'ENG',
            content: 'qwe'
        },
        {
            id: 14,
            title: 'ENG',
            content: 'qwe'
        },
        {
            id: 15,
            title: 'ENG',
            content: 'qwe'
        },
        {
            id: 16,
            title: 'ENG',
            content: 'qwe'
        },
        {
            id: 17,
            title: 'ENG',
            content: 'qwe'
        },
        {
            id: 18,
            title: 'ENG',
            content: 'qwe'
        },
        {
            id: 19,
            title: 'ENG',
            content: 'qwe'
        },
        {
            id: 20,
            title: 'ENG',
            content: 'qwe'
        },
        {
            id: 21,
            title: 'ENG',
            content: 'qwe'
        },
        {
            id: 22,
            title: 'ENG',
            content: 'qwe'
        },
        {
            id: 23,
            title: 'ENG',
            content: 'qwe'
        },
        {
            id: 24,
            title: 'ENG',
            content: 'qwe'
        },
        {
            id: 25,
            title: 'ENG',
            content: 'qwe'
        },      
        {
            id: 26,
            title: 'ENG',
            content: 'qwe'
        },      
        {
            id: 27,
            title: 'ENG',
            content: 'qwe'
        },     
        {
            id: 28,
            title: 'ENG',
            content: 'qwe'
        },      
        {
            id: 29,
            title: 'ENG',
            content: 'qwe'
        },
        {
            id: 30,
            title: 'ENG',
            content: 'qwe'
        },
        {
            id: 31,
            title: 'ENG',
            content: 'qwe'
        },
        {
            id: 32,
            title: 'ENG',
            content: 'qwe'
        },
        {
            id: 33,
            title: 'ENG',
            content: 'qwe'
        },
        {
            id: 34,
            title: 'ENG',
            content: 'qwe'
        },
        {
            id: 35,
            title: 'ENG',
            content: 'qwe'
        },
        {
            id: 36,
            title: 'ENG',
            content: 'qwe'
        },
        {
            id: 37,
            title: 'ENG',
            content: 'qwe'
        },
        {
            id: 38,
            title: 'ENG',
            content: 'qwe'
        },
        {
            id: 39,
            title: 'ENG',
            content: 'qwe'
        },
        {
            id: 40,
            title: 'ENG',
            content: 'qwe'
        }
      
      
      

    ]

    return (
        <div className="home">
            <div className="hometop">
                Specialisalion - Mechalronics Engineering
            </div>
            <div className="homemain">
                <div>
                    <div>2023</div>
                    <div className="homecon">
                        <div>
                            <div>Samesler 1</div>
                            <div>Samesler 2</div>
                        </div>
                        <div className="cardF">
                            {
                                data.map((item) => {
                                    return (
                                        item.id < 9 ? <div key={item.id} onClick={() => {
                                            Modal.info({
                                                title: ' ',
                                                content: (
                                                    <Card title={item.title}>{item.content}</Card>
                                                ),
                                            });
                                        }}>
                                            <div style={{fontSize:'16px'}}>{item.title}</div>
                                            <div>{item.content}</div>
                                        </div>
                                            : null)
                                })
                            }
                        </div>
                    </div>
                </div>
                <div>
                    <div>2024</div>
                    <div className="homecon">
                        <div>
                            <div>Samesler 1</div>
                            <div>Samesler 2</div>
                        </div>
                        <div className="cardF">
                            {
                                data.map((item) => {
                                    return (
                                        item.id>8&& item.id < 17 ? <div key={item.id} onClick={() => {
                                            Modal.info({
                                                title: ' ',
                                                content: (
                                                    <Card title={item.title}>{item.content}</Card>
                                                ),
                                            });
                                        }}>
                                            <div style={{fontSize:'16px'}}>{item.title}</div>
                                            <div>{item.content}</div>
                                        </div>
                                            : null)
                                })
                            }
                        </div>
                    </div>
                </div>
                <div>
                    <div>2025</div>
                    <div className="homecon">
                        <div>
                            <div>Samesler 1</div>
                            <div>Samesler 2</div>
                        </div>
                        <div className="cardF">
                            {
                                data.map((item) => {
                                    return (
                                        item.id>16&& item.id < 25  ? <div key={item.id} onClick={() => {
                                            Modal.info({
                                                title: ' ',
                                                content: (
                                                    <Card title={item.title}>{item.content}</Card>
                                                ),
                                            });
                                        }}>
                                           <div style={{fontSize:'16px'}}>{item.title}</div>
                                            <div>{item.content}</div>
                                        </div>
                                            : null)
                                })
                            }
                        </div>
                    </div>
                </div>
                <div>
                    <div>2026</div>
                    <div className="homecon">
                        <div>
                            <div>Samesler 1</div>
                            <div>Samesler 2</div>
                        </div>
                        <div className="cardF">
                            {
                                data.map((item) => {
                                    return (
                                        item.id>24&& item.id < 33  ? <div key={item.id} onClick={() => {
                                            Modal.info({
                                                title: '',
                                                content: (
                                                    <Card title={item.title}>{item.content}</Card>
                                                ),
                                            });
                                        }}>
                                            <div style={{fontSize:'16px'}}>{item.title}</div>
                                            <div>{item.content}</div>
                                        </div>
                                            : null)
                                })
                            }
                        </div>
                    </div>
                </div>
                <div>
                    <div>2027</div>
                    <div className="homecon">
                        <div>
                            <div>Samesler 1</div>
                            <div>Samesler 2</div>
                        </div>
                        <div className="cardF">
                            {
                                data.map((item) => {
                                    return (
                                        item.id>32 ? <div key={item.id} onClick={() => {
                                            Modal.info({
                                                title: ' ',
                                                content: (
                                                    <Card title={item.title}>{item.content}</Card>
                                                ),
                                            });
                                        }}>
                                            <div style={{fontSize:'16px'}}>{item.title}</div>
                                            <div>{item.content}</div>
                                        </div>
                                            : null)
                                })
                            }
                        </div>
                    </div>
                </div>
            </div>
            <div className="homebottom">
                <div><Button type="primary" ghost>Back</Button></div>
                <div><Button type="primary">Submit</Button></div>
            </div>
        </div>
    )
}
export default Home