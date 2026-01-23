"use client";

import React, { useState, useRef } from 'react';
import { LuScan, LuSearch, LuX, LuPlus, LuMinus, LuCreditCard, LuWallet, LuBanknote, LuPrinter, LuUser, LuPercent } from 'react-icons/lu';

interface Product {
  id: number;
  name: string;
  price: number;
  barcode?: string;
  category: string;
  stock: number;
}

interface CartItem extends Product {
  qty: number;
}

interface PaymentMethod {
  id: string;
  name: string;
  icon: React.ReactNode;
  color: string;
}

export default function POSInterface() {
  const [cart, setCart] = useState<CartItem[]>([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [barcodeInput, setBarcodeInput] = useState('');
  const [selectedPayment, setSelectedPayment] = useState<string>('');
  const [discount, setDiscount] = useState(0);
  const [cashReceived, setCashReceived] = useState(0);
  const barcodeRef = useRef<HTMLInputElement>(null);
  const searchRef = useRef<HTMLInputElement>(null);

  // Mock products data
  const products: Product[] = [
    { id: 1, name: "Clavier Mécanique RGB", price: 45000, barcode: "123456789012", category: "Hardware", stock: 15 },
    { id: 2, name: "Souris Gaming", price: 25000, barcode: "123456789013", category: "Hardware", stock: 8 },
    { id: 3, name: "Écran 27\"", price: 120000, barcode: "123456789014", category: "Hardware", stock: 5 },
    { id: 4, name: "Casque Audio", price: 35000, barcode: "123456789015", category: "Audio", stock: 12 },
    { id: 5, name: "Clé USB 32GB", price: 8000, barcode: "123456789016", category: "Accessoires", stock: 25 },
  ];

  const paymentMethods: PaymentMethod[] = [
    { id: 'cash', name: 'Espèces', icon: <LuBanknote className="w-5 h-5" />, color: 'bg-green-500' },
    { id: 'card', name: 'Carte', icon: <LuCreditCard className="w-5 h-5" />, color: 'bg-blue-500' },
    { id: 'mobile', name: 'Mobile', icon: <LuWallet className="w-5 h-5" />, color: 'bg-purple-500' },
  ];

  const addToCart = (product: Product) => {
    setCart(prev => {
      const existing = prev.find(item => item.id === product.id);
      if (existing) {
        return prev.map(item =>
          item.id === product.id
            ? { ...item, qty: item.qty + 1 }
            : item
        );
      }
      return [...prev, { ...product, qty: 1 }];
    });
  };

  const updateQuantity = (id: number, qty: number) => {
    if (qty <= 0) {
      setCart(prev => prev.filter(item => item.id !== id));
    } else {
      setCart(prev => prev.map(item =>
        item.id === id ? { ...item, qty } : item
      ));
    }
  };

  const removeFromCart = (id: number) => {
    setCart(prev => prev.filter(item => item.id !== id));
  };

  const handleBarcodeScan = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && barcodeInput.trim()) {
      const product = products.find(p => p.barcode === barcodeInput.trim());
      if (product) {
        addToCart(product);
        setBarcodeInput('');
      } else {
        alert('Produit non trouvé');
      }
    }
  };

  const subtotal = cart.reduce((sum, item) => sum + (item.price * item.qty), 0);
  const discountAmount = (subtotal * discount) / 100;
  const total = subtotal - discountAmount;
  const change = selectedPayment === 'cash' ? cashReceived - total : 0;

  const filteredProducts = products.filter(product =>
    product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    product.barcode?.includes(searchTerm)
  );

  return (
    <div className="h-full w-full flex overflow-hidden">
      {/* Catalogue Section */}
      <div className="flex-1 flex flex-col border-r-2 border-zinc-200">
        {/* Header with search and barcode */}
        <header className="h-32 px-6 py-4 bg-white border-b border-zinc-200 space-y-3">
          {/* Barcode Scanner */}
          <div className="flex items-center gap-3">
            <LuScan className="w-5 h-5 text-zinc-600" />
            <input
              ref={barcodeRef}
              type="text"
              value={barcodeInput}
              onChange={(e) => setBarcodeInput(e.target.value)}
              onKeyPress={handleBarcodeScan}
              placeholder="Scanner un code-barres..."
              className="flex-1 px-4 py-2 border border-zinc-300 rounded-lg focus:border-zinc-900 focus:ring-0"
            />
          </div>

          {/* Search */}
          <div className="flex items-center gap-3">
            <LuSearch className="w-5 h-5 text-zinc-600" />
            <input
              ref={searchRef}
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="Rechercher un produit..."
              className="flex-1 px-4 py-2 border border-zinc-300 rounded-lg focus:border-zinc-900 focus:ring-0"
            />
          </div>
        </header>

        {/* Products Grid */}
        <div className="flex-1 overflow-y-auto p-6 grid grid-cols-2 xl:grid-cols-3 gap-4">
          {filteredProducts.map((product) => (
            <button
              key={product.id}
              onClick={() => addToCart(product)}
              className="bg-white border-2 border-zinc-200 p-4 rounded-lg hover:border-zinc-900 hover:shadow-lg transition-all text-left group"
            >
              <div className="flex justify-between items-start mb-2">
                <span className={`text-xs font-bold px-2 py-1 rounded ${
                  product.stock > 10 ? 'bg-green-100 text-green-800' :
                  product.stock > 5 ? 'bg-yellow-100 text-yellow-800' :
                  'bg-red-100 text-red-800'
                }`}>
                  Stock: {product.stock}
                </span>
                <span className="text-lg font-bold text-zinc-900">
                  {product.price.toLocaleString()} F
                </span>
              </div>
              <h3 className="font-bold text-zinc-900 mb-1 leading-tight">{product.name}</h3>
              <p className="text-sm text-zinc-500">{product.category}</p>
              {product.barcode && (
                <p className="text-xs text-zinc-400 mt-1 font-mono">{product.barcode}</p>
              )}
            </button>
          ))}
        </div>
      </div>

      {/* Cart Section */}
      <div className="w-96 flex flex-col bg-zinc-50">
        {/* Cart Header */}
        <div className="h-20 px-6 flex items-center justify-between border-b border-zinc-200 bg-white">
          <h2 className="text-xl font-bold">Panier ({cart.length})</h2>
          <button
            onClick={() => setCart([])}
            className="text-red-600 hover:text-red-800 p-2"
          >
            <LuX className="w-5 h-5" />
          </button>
        </div>

        {/* Cart Items */}
        <div className="flex-1 overflow-y-auto px-6 py-4">
          {cart.length === 0 ? (
            <div className="text-center text-zinc-500 py-8">
              <LuUser className="w-12 h-12 mx-auto mb-4 opacity-50" />
              <p>Panier vide</p>
            </div>
          ) : (
            <div className="space-y-4">
              {cart.map((item) => (
                <div key={item.id} className="bg-white p-4 rounded-lg border border-zinc-200">
                  <div className="flex justify-between items-start mb-3">
                    <div className="flex-1">
                      <h3 className="font-bold text-zinc-900 leading-tight">{item.name}</h3>
                      <p className="text-sm text-zinc-500">{item.price.toLocaleString()} F/unité</p>
                    </div>
                    <button
                      onClick={() => removeFromCart(item.id)}
                      className="text-red-500 hover:text-red-700 p-1"
                    >
                      <LuX className="w-4 h-4" />
                    </button>
                  </div>

                  <div className="flex justify-between items-center">
                    <div className="flex items-center gap-2 bg-zinc-100 rounded-lg p-1">
                      <button
                        onClick={() => updateQuantity(item.id, item.qty - 1)}
                        className="w-8 h-8 flex items-center justify-center bg-white rounded hover:bg-zinc-200"
                      >
                        <LuMinus className="w-4 h-4" />
                      </button>
                      <span className="w-8 text-center font-bold">{item.qty}</span>
                      <button
                        onClick={() => updateQuantity(item.id, item.qty + 1)}
                        className="w-8 h-8 flex items-center justify-center bg-white rounded hover:bg-zinc-200"
                      >
                        <LuPlus className="w-4 h-4" />
                      </button>
                    </div>
                    <span className="font-bold text-lg">
                      {(item.price * item.qty).toLocaleString()} F
                    </span>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Discount */}
        {cart.length > 0 && (
          <div className="px-6 py-3 bg-white border-t border-zinc-200">
            <div className="flex items-center gap-2">
              <LuPercent className="w-4 h-4 text-zinc-600" />
              <span className="text-sm font-medium">Remise (%)</span>
              <input
                type="number"
                value={discount}
                onChange={(e) => setDiscount(Number(e.target.value))}
                className="w-16 px-2 py-1 border border-zinc-300 rounded text-center text-sm"
                min="0"
                max="100"
              />
            </div>
          </div>
        )}

        {/* Payment Section */}
        {cart.length > 0 && (
          <div className="px-6 py-4 bg-white border-t border-zinc-200">
            <h3 className="font-bold mb-3">Mode de paiement</h3>
            <div className="grid grid-cols-3 gap-2 mb-4">
              {paymentMethods.map((method) => (
                <button
                  key={method.id}
                  onClick={() => setSelectedPayment(method.id)}
                  className={`p-3 rounded-lg border-2 flex flex-col items-center gap-1 transition-all ${
                    selectedPayment === method.id
                      ? 'border-zinc-900 bg-zinc-900 text-white'
                      : 'border-zinc-200 hover:border-zinc-400'
                  }`}
                >
                  {method.icon}
                  <span className="text-xs font-medium">{method.name}</span>
                </button>
              ))}
            </div>

            {selectedPayment === 'cash' && (
              <div className="mb-4">
                <label className="block text-sm font-medium mb-2">Montant reçu</label>
                <input
                  type="number"
                  value={cashReceived}
                  onChange={(e) => setCashReceived(Number(e.target.value))}
                  className="w-full px-3 py-2 border border-zinc-300 rounded-lg"
                  placeholder="0"
                />
                {cashReceived > 0 && (
                  <p className="text-sm text-zinc-600 mt-1">
                    Monnaie à rendre: {Math.max(0, change).toLocaleString()} F
                  </p>
                )}
              </div>
            )}

            <div className="space-y-2 mb-4">
              <div className="flex justify-between text-sm">
                <span>Sous-total:</span>
                <span>{subtotal.toLocaleString()} F</span>
              </div>
              {discount > 0 && (
                <div className="flex justify-between text-sm text-red-600">
                  <span>Remise ({discount}%):</span>
                  <span>-{discountAmount.toLocaleString()} F</span>
                </div>
              )}
              <div className="flex justify-between font-bold text-lg border-t border-zinc-200 pt-2">
                <span>Total:</span>
                <span>{total.toLocaleString()} F</span>
              </div>
            </div>

            <div className="space-y-2">
              <button className="w-full bg-zinc-900 text-white py-3 rounded-lg font-bold hover:bg-zinc-800 transition-colors">
                Valider la vente
              </button>
              <button className="w-full border border-zinc-300 text-zinc-700 py-2 rounded-lg hover:bg-zinc-50 transition-colors flex items-center justify-center gap-2">
                <LuPrinter className="w-4 h-4" />
                Imprimer ticket
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}