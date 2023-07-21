import React from 'react';
import {Button, Dialog, DialogContent, DialogTitle, Typography} from "@mui/material";
import DialogActions from "@mui/material/DialogActions";
import userimg from '../k_manage_image/k_mange_user.jpg';
import hpimg from '../k_manage_image/k_hpimg.png';
import mailimg from '../k_manage_image/k_mailimg.png';
import cardimg from '../k_manage_image/k_cardimg.png';
import blockimg from '../image/alert.png';

function UserRowList(props) {
    const {idx,row,no,onDelete,currentPage}=props;

    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };
    const handleClose = () => {
        setOpen(false);
    };

    return (
        <tr style={{backgroundColor:'#f6f6f6',textAlign:'center',borderStyle:'unset'}}>
            <td style={{width:'20%'}}>{no-idx}</td>
            <td style={{width:'30%'}}>{row.user_name}</td>
            <td style={{width:'20%'}} onClick={handleClickOpen}>{row.email}</td>
            <td style={{width:'30%'}}>
                <Button variant='text' style={{width:'80%',fontSize:'0.5rem',color:'red'}}
                        onClick={()=>{
                            const b=window.confirm("삭제하려면 확인을 누르십시요")
                            if(b){
                                console.log(row.user_id);
                                onDelete(row.user_id);
                            }
                        }}>
                    삭제
                </Button>
            </td>
            <Dialog
                onClose={handleClose}
                aria-labelledby="customized-dialog-title"
                open={open}
            >
                <DialogTitle id="customized-dialog-title" onClose={handleClose}   style={{width:'22rem'}}>
                    <img alt={'슬픔이'} src={userimg} style={{width:'4rem',height:'4rem',borderRadius:'100px',marginRight:'4px'}}/>
                    &nbsp;{row.user_name}
                </DialogTitle>
                <DialogContent dividers>
                    <Typography gutterBottom>
                        <img alt={'mail이미지'} src={mailimg} style={{width:'2.5rem'}}/>
                        &nbsp; 이메일 : {row.email}
                    </Typography>
                    <Typography gutterBottom>
                        <img alt={'hp이미지'} src={hpimg} style={{width:'2.5rem'}}/>
                        &nbsp; 핸드폰 : {row.hp.slice(0, 3) + "-" + row.hp.slice(3, 7) + "-" + row.hp.slice(7)}
                    </Typography>
                    <Typography gutterBottom>
                        <img alt={'card이미지'} src={cardimg} style={{width:'2.5rem'}}/>
                        &nbsp;총 지불금액 : {row.total_payment}
                    </Typography>
                </DialogContent>
                <DialogActions>
                    <Button autoFocus onClick={handleClose}>
                        상세조회 닫기
                    </Button>
                </DialogActions>
            </Dialog>
        </tr>
    );
}

export default UserRowList;