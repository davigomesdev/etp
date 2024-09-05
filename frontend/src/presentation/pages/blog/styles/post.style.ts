//styled imports
import styled from 'styled-components';

//theme imports
import { theme } from '../../../themes/theme';

export const Container = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 20px;
`;

export const Content = styled.div`
    width: 100%;
    padding: 40px 20px;
    max-width: 1000px;
    display: flex;
    justify-content: center;
    align-items: self-start;
    gap: 30px;
`;

export const Post = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 25px;
`;

export const Header = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;

    h1 {
        line-height: 28px;
    }

    p {
        width: 100%;
        max-width: 200px;
        text-align: right;
        font-family: ${theme.font.family.poppins};
        display: flex;
        align-items: center;
        justify-content: right;
        gap: 10px;
    }

    @media (max-width: 700px) {
        flex-direction: column;
        justify-content: center;
        gap: 10px;

        h1 {
            text-align: center;
        }

        p {
            justify-content: center;
        }
    }
`;

export const Cover = styled.div`
    width: 100%;
    height: 400px;
    overflow: hidden;
    display: flex;
    align-items: center;
    justify-content: center;

    img {
        width: 100%;
        object-fit: cover;
    }
`;

export const Body = styled.div`
    width: 100%;
    position: relative;
    font-family: ${theme.font.family.poppins};

    .title_component{
        width: 100%;
        margin: 0px 0;
        display: flex;
        align-items: center;
    }
    .title_component p{
        font-size: 17px;
        font-weight: 500;
        width: 100%;
        cursor: text;
        padding: 5px 0px;
    }
    .title_component input{
        border: none;
        display: none;
        width: 100%;
        padding: 5px 0px;
        outline: none;
        font-size: 17px;
        font-weight: 500;
        transition: all 0.2s ease;
    }

    /*==== paragraph_component ====*/

    .paragraph_component{
        width: 100%;
        display: flex;
        align-items: center;
    }
    .paragraph_component #paragraph{
        width: 100%;
        font-size: 15px;
        outline: none;
        color: #757575;
        transition: all 0.2s ease;
        word-break: break-all;
    }

    /*==== image_component ====*/

    .image_component{
        width: 100%;
        height: 350px;
        margin-top: 10px;
        margin-bottom: 10px;
    }
    .image_component .position_component{
        top: 50%;
    }
    .image_component .image_view{
        position: absolute;
        width: 100%;
        top: 0;
        pointer-events: none;
    }
    .image_component .image_view #image_view{
        display: none;
    }
    .image_component .image_view img{
        width: 100%;
        height: 350px;
    }
    .image_component img{
        object-fit: cover;
        width: 100%;
    }
    .image_component .remove_component{
        top: 50%;
    }

    /*==== image_and_text_component ====*/

    .image_and_text_component{
        width: 100%;
        display: grid;
        grid-template-columns: 1fr 1fr;
        align-items: center;
        gap: 15px;
        margin-top: 5px;
        margin-bottom: 5px;
    }
    .image_and_text_component #paragraph{
        width: 100%;
        font-size: 15px;
        outline: none;
        color: #757575;
        transition: all 0.2s ease;
    }
    .image_and_text_component .image_button_upload{
        width: 100%;
        height: 200px;
        display: flex;
        justify-content: center;
        align-items: center;
        padding: 10px;
        background: #eeeeee;
        color: var(--border-strong-color);
        cursor: pointer;
        font-size: 70px;
        border: 2px dashed var(--border-strong-color);
        transition: all 0.3s ease;
    }
    .image_and_text_component .image_button_upload:hover{
        color: var(--primary-color);
        border: 2px dashed var(--primary-color);
    }
    .image_and_text_component .image{
        position: relative;
    }
    .image_and_text_component .image_view{
        width: 100%;
        top: 0;
        pointer-events: none;
    }
    .image_and_text_component .image_view #image_view{
        display: none;
    }
    .image_and_text_component .image_view img{
        width: 100%;
    }
    .image_and_text_component img{
        object-fit: cover;
        width: 100%;
        height: 200px;
    }

    /*==== image_grid_two_component ====*/

    .image_grid_two_component, .image_grid_tree_component{
        width: 100%;
        display: flex;
        align-items: center;
        margin-top: 10px;
        margin-bottom: 10px;
    }
    .image_grid_tree_component .image_grid{
        width: 100%;
        display: grid;
        min-height: 200px;
        grid-template-columns: 1fr 1fr 1fr;
        gap: 15px;
    }
    .image_grid_two_component .image_grid{
        width: 100%;
        min-height: 200px;
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 15px;
    }
    .image_grid_two_component .image_button_upload
    , .image_grid_tree_component .image_button_upload{
        width: 100%;
        height: 200px;
        display: flex;
        justify-content: center;
        align-items: center;
        padding: 10px;
        background: #eeeeee;
        color: var(--border-strong-color);
        cursor: pointer;
        font-size: 70px;
        border: 2px dashed var(--border-strong-color);
        transition: all 0.3s ease;
    }
    .image_grid_two_component .image_button_upload:hover,
    .image_grid_tree_component .image_button_upload:hover{
        color: var(--primary-color);
        border: 2px dashed var(--primary-color);
    }
    .image_grid_two_component .item, .image_grid_tree_component .item{
        position: relative;
    }
    .image_grid_two_component .image_view, .image_grid_tree_component .image_view{
        position: absolute;
        width: 100%;
        top: 0;
        pointer-events: none;
    }
    .image_grid_two_component .image_view #image_view, .image_grid_tree_component .image_view #image_view{
        display: none;
    }
    .image_grid_two_component .image_view img, .image_grid_tree_component .image_view img{
        width: 100%;
    }
    .image_grid_two_component img, .image_grid_tree_component img{
        object-fit: cover;
        width: 100%;
        height: 200px;
    }

    /*==============================*/


.posters-view{
    width: 100%;
    min-width: 320px;
    display: flex;
    flex-direction: column;
    justify-content: start;
    align-items: start;
    overflow-x: hidden;
    overflow-y: auto;
    max-height: 800px;
    gap: 10px;
    box-sizing: border-box;
}
.posters-view::-webkit-scrollbar {
  width: 8px;               
}
.posters-view::-webkit-scrollbar-track {
  background: #ffffff00;        
}
.posters-view::-webkit-scrollbar-thumb {
  background-color: #d3d3d3;    
  border-radius: 20px;       
}
.posters-view .item{
    width: 300px;
    min-height: 275px;
    box-sizing: border-box;
    position: relative;
    cursor: pointer;
    background: #fff;
    box-shadow: 2px 2px 5px 1px #b1b1b162;
}
.posters-view .item .box{
    box-sizing: border-box;
    position: absolute;    
    height: 110px;
    bottom: 0;
    background: #fff;
    width: 100%;
    transition: all 0.4s ease;
    border-top: 4px solid #039c50;
}
.posters-view .item:hover .box{
    height: 230px;
}
.posters-view .item .box .content{
    width: 100%;
    box-sizing: border-box;
    padding: 0px 5px;
    padding-bottom: 5px;
}
.posters-view .item .box .content .cont{
    height: 90px;
    overflow: hidden;
    transition: all 0.4s ease;
    box-sizing: border-box;
}
.posters-view .item:hover .box .content .cont{
    height: 200px;
}
.posters-view a{
    text-decoration: none;
}

.posters-view .item .cover{
    width: 300px;
    height: 180px;
}
.posters-view .item .cover img{
    width: 100%;
    object-fit: cover;
}
.posters-view .item .date{
    position: absolute;
    color: #424242;
    top: 0;
    padding: 2px 5px;
    font-weight: 700;
    margin: 5px;
    font-size: 10px;
    background: #d3d3d3;
    opacity: 0.7;
}

.posters-view .item .category{
    background: #039c50;
    font-weight: 500;
    margin-top: -20px;
    right: 0;
    padding: 5px 15px;
    font-size: 15px;
    color: #fff;
    position: absolute;
    transition: all 0.4s ease;
}
.posters-view .item:hover .category{
    margin-top: -33px;
}
.posters-view .item .title{
    padding: 10px;
    margin-top: 10px;
    padding-bottom: 0px;
    display: flex;
    flex-direction: column;
    font-weight: 600;
    color: #464646;
    line-height: 20px;
}
.posters-view .item .description{
    padding: 10px; 
    padding-top: 0; 
    margin-top: 2px;
    box-sizing: border-box;
}
.posters-view .item .description p{
    font-size: 13px;    
    line-height: 16px;   
    text-align: left;
    color: var(--text-color);
}

.contenteditable{
    background: var(--neutral-white-color);
    position: fixed;
    right: 0;
    bottom: 0;
    margin: 20px;
    padding: 15px;
    border-radius: 5px;
    box-shadow: 2px 2px 5px 1px #b1b1b162;
}
.contenteditable .container .options{
    display: grid;
    grid-template-columns: repeat(6, 30px);
    gap: 5px;
}
@media screen and (max-width: 1200px) {
    .poster-date{
        padding: 10px;
    }
    .poster-date .poster-date-container{
        width: 600px;
    }   
}
@media screen and (max-width: 1030px) {
    .poster-date .poster-date-container{
        width: 500px;
    }  
}
@media screen and (max-width: 930px) {
    .poster-date .poster-date-container{
        width: 100%;
    }  
    .poster .container{
        width: 100%;
        display: flex;
        justify-content: center;
        padding: 20px;
    }
    .posters-view{
        display: none;
    }
}
@media screen and (max-width: 600px) {
    .image_component{
        height: 250px;
    }
    .actions_buttons button{
        font-size: 12px;
    } 
    .image_component .image_view img{
        width: 100%;
        height: 250px;
    }
    .poster_title{
        width: 100%;
        display: grid;
        grid-template-columns: 1fr;
        font-size: 13px;
        text-align: center;
    }
    .poster_title p{
        font-size: 15px;
    }
    .poster_title .date{
        font-size: 12px;
    }
    .poster_title .date i{
        font-size: 23px;
    }
}
@media screen and (max-width: 600px) {
    .image_grid_two_component img, .image_grid_tree_component img{
        object-fit: cover;
        width: 100%;
        height: 150px;
    }
    .image_grid_two_component .image_button_upload
    , .image_grid_tree_component .image_button_upload{
        height: 150px;
    }
    .image_and_text_component{
        display: flex;
        flex-direction: column;
    }
}

@media screen and (max-width: 480px) {
    .image_grid_tree_component .image_grid{
        width: 100%;
        display: grid;
        min-height: 500px;
        grid-template-columns: 1fr;
        gap: 15px;
    }
    .image_and_text_component #paragraph, 
    .paragraph_component #paragraph{
        font-size: 12px;
    }
    .image_component{
        height: 200px;
    }
    .image_component .image_view img{
        width: 100%;
        height: 200px;
    }
}

@media screen and (max-width: 410px) {
    .image_grid_two_component .image_grid{
        width: 100%;
        display: grid;
        grid-template-columns: 1fr;
        gap: 15px;
    }
    .actions_buttons button{
        font-size: 12px;
        padding: 13px;
    } 
}
`;
