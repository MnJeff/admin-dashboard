import React from "react";
import { Button, Modal, InputGroup,Form, ModalFooter, ModalHeader, ModalBody } from "react-bootstrap";
import { ref as ref_database, onValue, remove,get,child, update,set } from "firebase/database";
import StartFireBase from "../../firebase2";
import { storage } from "../../firebase";
import { uploadBytes,ref as ref_storage,getDownloadURL, listAll,uploadBytesResumable } from "firebase/storage";
import "./datatourconntrol.scss"
import { Datatour } from "./datatour";
import { ThirtyFpsSelect } from "@mui/icons-material";

const db = StartFireBase()




export class DatatourControl extends React.Component{
    

    constructor(props){
        super(props)
        this.state ={
            imagedata:[],
            imageUpload:'',
            mode:'',
            isOpen: false,
            record:{
                username:props.username,
                title:props.record.title,
                location:props.record.location,
                price:props.record.price,
                time:props.record.time,
                person:props.record.person,
                content:props.record.content,
                date:props.record.date,
                img:props.record.img,
                img2:props.record.img2,
                
            },
            modusername:'',
            modtitle:'',
            modlocation:'',
            modprice:'',
            modtime:'',
            modperson:'',
            modcontent:'',
            moddate:'',
            modimg:'',
            modimg2:''
        }

    }



    uploadImage(){
        if(this.state.imageUpload == null) return;
        const imageRef = ref_storage(storage,this.state.imageUpload.name)
        uploadBytes(imageRef,this.state.imageUpload)

        const uploadTask = uploadBytesResumable(imageRef, this.state.imageUpload);
        uploadTask.on(
            "state_changed",
            (snapshot) => {},
            (error) => {
              console.log(error);
            },
            () => {
              getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
              });
            }
          );

    }
    


    componentDidMount(){
        
    }


    render(){
        return(
        <>
            <Button variant='primary' className="ms-2" onClick={()=>{this.openModal('add')}}>Thêm Tour</Button>
            <Button variant='warning' className="ms-2"onClick={()=>{this.openModal('edit')}}>Sửa Tour</Button>

            <Modal show={this.state.isOpen}>
                <Modal.Header>
                    <Modal.Title>{(this.state.mode=='add')?'Thêm mới tour':'Sửa Tour'}</Modal.Title>
                    <Button size='sm' variant='dark'onClick={()=>{this.closeModal()}}>X</Button>
                </Modal.Header>

                <Modal.Body>
                    <InputGroup>
                        <InputGroup.Text className="input_text">Id</InputGroup.Text>
                        <Form.Control value={this.state.modusername} onChange={e=>{this.setState({modusername: e.target.value})}} 
                        disabled={this.state.mode !='add'}/>
                    </InputGroup>
                    <InputGroup>
                        <InputGroup.Text className="input_text">Tiêu đề tour</InputGroup.Text>
                        <Form.Control value={this.state.modtitle} onChange={e=>{this.setState({modtitle: e.target.value})}} 
                        />
                    </InputGroup>
                    <InputGroup>
                        <InputGroup.Text className="input_text">Địa điểm</InputGroup.Text>
                        <Form.Control value={this.state.modlocation} onChange={e=>{this.setState({modlocation: e.target.value})}} 
                        />
                    </InputGroup>
                    <InputGroup>
                        <InputGroup.Text className="input_text">Giá</InputGroup.Text>
                        <Form.Control value={this.state.modprice} onChange={e=>{this.setState({modprice: e.target.value})}} 
                        />
                    </InputGroup>
                    <InputGroup>
                        <InputGroup.Text className="input_text">Thời gian</InputGroup.Text>
                        <Form.Control value={this.state.modtime} onChange={e=>{this.setState({modtime: e.target.value})}} 
                        />
                    </InputGroup>
                    <InputGroup> 
                        <InputGroup.Text className="input_text">Số người</InputGroup.Text>
                        <Form.Control value={this.state.modperson} onChange={e=>{this.setState({modperson: e.target.value})}} 
                        />
                    </InputGroup>
                    <InputGroup>
                        <InputGroup.Text className="input_text">Nội dung</InputGroup.Text>
                        <Form.Control value={this.state.modcontent} onChange={e=>{this.setState({modcontent: e.target.value})}} 
                        />
                    </InputGroup>
                    <InputGroup>
                        <InputGroup.Text className="input_text">Date</InputGroup.Text>
                        <Form.Control value={this.state.moddate} onChange={e=>{this.setState({moddate: e.target.value})}} 
                        />
                    </InputGroup>
                    <InputGroup>
                        <InputGroup.Text className="input_text">Img url</InputGroup.Text>
                        <Form.Control value={this.state.modimg} onChange={e=>{this.setState({modimg: e.target.value})}} 
                        />
                    </InputGroup>
                </Modal.Body>

                <Modal.Footer>
                    <Button onClick={()=>{(this.interface('add'));this.uploadImage()}} variant='primary' className="ms-2" style={(this.state.mode != 'add')?{display:'none'}:{}}>Thêm mới tour</Button>
                    <Button onClick={()=>(this.interface('updates'))} variant='success' className="ms-2"style={(this.state.mode == 'add')?{display:'none'}:{}}>Sửa Tour</Button>
                    <Button onClick={()=>(this.interface('delete'))} variant='danger' className="ms-2"style={(this.state.mode == 'add')?{display:'none'}:{}}>Xóa tour</Button>
                    <Form.Control onChange={e=>{this.setState({imageUpload: e.target.files[0]})}} type="file" />
                    <div className="image"> 
                    <img
                        
                        src={
                        this.state.imageUpload
                        ? URL.createObjectURL(this.state.imageUpload)
                            : "https://icon-library.com/images/no-image-icon/no-image-icon-0.jpg"
                        }
                        alt=""
                    /></div>
                    
                </Modal.Footer>
            </Modal>
            
        </>
        
        )
    }

    openModal(option){
        if(option=='add'){
            this.setState({
                isOpen: true,
                mode:option,
                modusername:'',
                modtitle:'',
                modlocation:'',
                modprice:'',
                modtime:'',
                modperson:'',
                modcontent:'',
                moddate:'',
                modimg:'',
                modimg2:''

            })
        }else if(option=='edit'){
            let rec=this.state.record;
            this.setState({
                isOpen: true,
                mode:option,
                modusername:rec.username,
                modtitle:rec.title,
                modlocation:rec.location,
                modprice:rec.price,
                modtime:rec.time,
                modperson:rec.person,
                modcontent:rec.content,
                moddate:rec.date,
                modimg:rec.img,
                modimg2:rec.img2
            })
        }
        
    }
    closeModal(){
        this.setState({
            isOpen: false
        })
    }

    getData(){
        return{
            id: this.state.modusername,
            data:{
                content: this.state.modcontent,
                title: this.state.modtitle,
                location: this.state.modlocation,
                price: this.state.modprice,
                time: this.state.modtime,
                person: this.state.modperson,
                date: this.state.moddate,
                img:this.state.modimg,
                img2:this.state.imageUpload.name
            }
        }
    }

    interface(option){
        if(option=='add')
        this.insertData()
        else if(option=='updates')
        this.updateData()
        else if(option=='delete')
        this.deleteData()

    }

    insertData(){
        const dbRef = ref_database(db)
        const record = this.getData()
        const address='Tour/'+record.id

        get(child(dbRef,address)).then(snapshot=>{
            if(snapshot.exists()){
                alert('Không thể tạo thêm tour, đã tồn tại')
            }else{
                set(ref_database(db,address), record.data,)
                alert('Thêm tour thành công')
            }
        })
    }
    updateData(){
        const dbRef = ref_database(db)
        const record = this.getData()
        const address='Tour/'+record.id

        get(child(dbRef,address)).then(snapshot=>{
            if(snapshot.exists()){
                update(ref_database(db,address), record.data)
                
            }else{
                alert('Không thể update, không tồn tại')
            }
        })
    }
    deleteData(){
        const dbRef = ref_database(db)
        const record = this.getData()
        const address='Tour/'+record.id

        get(child(dbRef,address)).then(snapshot=>{
            if(snapshot.exists()){
                remove(ref_database(db,address))
                
            }else{
                alert('Không thể xóa, không tồn tại')
            }
        })
    }
}