import ImageIcon from '@mui/icons-material/Image';
import LocalOfferIcon from '@mui/icons-material/LocalOffer';
import CategoryIcon from '@mui/icons-material/Category';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';

import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';

import {
  Container,
  Form,
  Input,
  InputGroup,
  Label,
  SubmitButton,
  LabelUpload,
  Select,
} from './styles.js';

import { toast } from 'react-toastify';
import { useLocation, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';

import api from '../../../services/api.js';
import { ErrorMessage } from '../../../layouts/AdminLayout/styles.js';

/* =========================
   🔹 SCHEMA (EDIT)
========================= */

const schema = Yup.object({
  name: Yup.string().min(5, 'Mínimo de 5 caracteres').required('O nome do produto é obrigatório'),
  price: Yup.number().positive('O preço deve ser positivo').required('O preço é obrigatório'),
  category_id: Yup.string().required('A categoria é obrigatória'),
  offer: Yup.bool(),
});

/* =========================
   🔹 COMPONENTE
========================= */

export function EditProduct() {
  const [filename, setFilename] = useState(null);
  const [categories, setCategories] = useState([]);

  const navigate = useNavigate();
  const location = useLocation();

  const product = location.state?.product;

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  useEffect(() => {
    if (product) {
      setValue('name', product.name);
      setValue('price', product.price / 100);
      setValue('category_id', product.category_id);
    }
  }, [product, setValue]);
  /* =========================
     🔹 PROTEÇÃO (refresh)
  ========================= */

  useEffect(() => {
    if (!product) {
      navigate('/admin/products');
    }
  }, [product, navigate]);

  /* =========================
     🔹 PREENCHE FORM
  ========================= */

  useEffect(() => {
    if (product) {
      setValue('name', product.name);
      setValue('price', product.price / 100);
      setValue('category_id', product.category_id);
    }
  }, [product, setValue]);

  /* =========================
     🔹 CARREGA CATEGORIAS
  ========================= */

  useEffect(() => {
    async function loadCategories() {
      try {
        const { data } = await api.get('/categories');
        setCategories(data);
      } catch (error) {
        console.error('Erro ao carregar categorias:', error);
      }
    }

    loadCategories();
  }, []);

  /* =========================
     🔹 SUBMIT
  ========================= */

  const onSubmit = async (data) => {
    try {
      const formData = new FormData();

      formData.append('name', data.name);
      formData.append('price', data.price * 100);
      formData.append('category_id', data.category_id);
      formData.append('offer', data.offer);

      if (data.file?.length) {
        formData.append('file', data.file[0]);
      }

      await toast.promise(api.put(`/products/${product.id}`, formData), {
        pending: 'Atualizando produto...',
        success: 'Produto atualizado com sucesso!',
        error: 'Erro ao atualizar produto.',
      });

      setTimeout(() => {
        navigate('/admin/produtos');
      }, 2000);
    } catch (error) {
      console.error('Erro ao atualizar produto:', error);
      toast.error('Erro ao atualizar produto.');
    }
  };

  if (!product) return null;

  /* =========================
     🔹 JSX
  ========================= */

  return (
    <Container>
      <Form onSubmit={handleSubmit(onSubmit)}>
        {/* NOME */}
        <InputGroup>
          <Label>
            <LocalOfferIcon />
            Nome do produto
          </Label>

          <Input type="text" {...register('name')} />
          <ErrorMessage>{errors.name?.message}</ErrorMessage>
        </InputGroup>

        {/* PREÇO */}
        <InputGroup>
          <Label>
            <AttachMoneyIcon />
            Preço
          </Label>

          <Input type="number" step="0.01" {...register('price')} />
          <ErrorMessage>{errors.price?.message}</ErrorMessage>
        </InputGroup>

        {/* IMAGEM */}
        <InputGroup>
          <LabelUpload>
            <ImageIcon />
            <span>Enviar nova imagem (opcional)</span>

            <Input
              type="file"
              accept="image/png,image/jpeg,image/webp"
              onChange={(e) => {
                setValue('file', e.target.files);
                setFilename(e.target.files?.[0]?.name || null);
              }}
            />

            {filename || 'Nenhum arquivo selecionado'}
          </LabelUpload>

          <ErrorMessage>{errors.file?.message}</ErrorMessage>
        </InputGroup>

        {/* CATEGORIA */}
        <InputGroup>
          <Label>
            <CategoryIcon />
            Categoria
          </Label>

          <Select {...register('category_id')}>
            <option value={String(product.category_id)}>{product.category?.name}</option>
            {categories.map((category) => (
              <option key={category.id} value={category.id}>
                {category.name}
              </option>
            ))}
          </Select>

          <ErrorMessage>{errors.category_id?.message}</ErrorMessage>
        </InputGroup>

        <InputGroup>
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
            <input
              className="checkbox"
              type="checkbox"
              {...register('offer')}
              defaultChecked={product.offer}
            />
            <Label>Produto em Oferta ?</Label>
          </div>
        </InputGroup>

        <SubmitButton type="submit">Salvar alterações</SubmitButton>
      </Form>
    </Container>
  );
}
